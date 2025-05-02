import { useState, useEffect } from "react"
import styles from "./test-section.module.css"
import flashcard from "../../assets/flashcard.png"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"
import userProfile from "../../assets/user-profile.png"
import { useParams } from "react-router-dom"

export function TestSection() {
  const { id } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0) // Start from 0 index
  const [flipped, setFlipped] = useState(false)
  const totalQuestions = 20
  const [questions, setQuestions] = useState<
    { question: string; correct_answer: string; incorrect_answers: string[] }[]
  >([])

  useEffect(() => {
    const fetchTriviaQuestions = async () => {
      try {
        const category = id // fallback to General Knowledge
        const res = await fetch(
          `https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}`,
        )
        const data = await res.json()
        setQuestions(data.results)
      } catch (error) {
        console.error("Failed to fetch trivia questions:", error)
      }
    }

    fetchTriviaQuestions()
  }, [id])

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setFlipped(false)
    }
  }
  const handleNext = () => {
    setFlipped(false)
    // Add delay so the flip reset happens before the next question shows
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        alert("You have completed all questions!")
      }
    }, 300) // 300ms is usually enough
  }

  const handleKnowIt = () => {
    handleNext()
  }

  const handleDontKnowIt = () => {
    handleNext()
  }

  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img className={styles.flashcard} src={flashcard} alt="Flashcard" />
          <h1>Choose your favourite topic</h1>
        </div>
        <img width={50} height={50} src={userProfile} alt="User" />
      </div>

      {/* Show Question Progress */}
      <div className={styles.progress}>
        Question {currentQuestion + 1} of {totalQuestions}
      </div>

      {/* If countries are loaded */}
      {questions.length > 0 && (
        <div className={styles.cardContainer}>
          <div
            className={`${styles.answers} ${flipped ? styles.flipped : ""}`}
            onClick={() => setFlipped(true)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: questions[currentQuestion].question,
                  }}
                ></div>
              </div>
              <div className={styles.cardBack}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: questions[currentQuestion].correct_answer,
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.flipeCard}>Flip to see the answer</div>

          {/* Show buttons after flipping */}
          <div className={styles.b}>
            {flipped ? (
              <div className={styles.buttons}>
                <button className={styles.knowButton} onClick={handleKnowIt}>
                  I know it
                </button>
                <button
                  className={styles.dontKnowButton}
                  onClick={handleDontKnowIt}
                >
                  I don't know it
                </button>
              </div>
            ) : (
              <div className={styles.navigationButtons}>
                <img src={arrowLeft} alt="" onClick={handlePrev} />
                <img src={arrowRight} alt="" onClick={handleNext} />
              </div>
            )}
          </div>
        </div>
      )}

      {questions.length === 0 && (
        <div className={styles.loading}>Loading trivia questions...</div>
      )}
    </main>
  )
}
