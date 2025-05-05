import { useState } from "react"
import { images } from "../../assets"
import { useParams } from "react-router-dom"
import styles from "./test-section.module.css"
import { useQuery } from "@tanstack/react-query"

export function TestSection() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const totalQuestions = 20
  const { id } = useParams()
  const [flipped, setFlipped] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // ---------------------------------------------------------------------------
  // fetch
  // ---------------------------------------------------------------------------

  const fetchQuestions = async () => {
    const category = id
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}`,
    )
    const data = await res.json()
    return data.results
  }

  const { data: questions, isLoading } = useQuery({
    queryFn: () => fetchQuestions(),
    queryKey: ["questions"],
    staleTime: Infinity, // It prevent data to fetch again and again in the background and in frontend
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function handlePrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setFlipped(false)
    }
  }

  function handleNext() {
    setFlipped(false)
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        alert("You have completed all questions!")
      }
    }, 300)
  }

  function handleKnowIt() {
    handleNext()
  }

  function handleDontKnowIt() {
    handleNext()
  }

  // ---------------------------------------------------------------------------
  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img
            className={styles.flashcard}
            src={images.FlashCard}
            alt="Flashcard"
          />
          <h1>Choose your favourite topic</h1>
        </div>
        <img width={50} height={50} src={images.UserProfileLogo} alt="User" />
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* SHOW QUESTIONS PROGRESS */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.progress}>
        Question {currentQuestion + 1} of {totalQuestions}
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* IF COUNTRIES ARE LOADED */}
      {/* --------------------------------------------------------------------------- */}
      {questions?.length > 0 && (
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

          <div className={styles.flipeCard}>
            {flipped ? "Return to origin" : "Flip to see the answer"}
          </div>

          {/* --------------------------------------------------------------------------- */}
          {/* SHOW BUTTON AFTER FLIPPING */}
          {/* --------------------------------------------------------------------------- */}
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
                <img src={images.ArrowLeft} alt="" onClick={handlePrev} />
                <img src={images.ArrowRight} alt="" onClick={handleNext} />
              </div>
            )}
          </div>
        </div>
      )}

      {questions.length === 0 && (
        <div className={styles.loading}>Loading questions...</div>
      )}
    </main>
  )
}
