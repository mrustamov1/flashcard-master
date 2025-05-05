import { useState } from "react"
import { images } from "../../assets"
import { useNavigate, useParams } from "react-router-dom"
import styles from "./test-section.module.css"
import { useQuery } from "@tanstack/react-query"

export function TestSection() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const totalQuestions = 20
  const { id } = useParams()
  const navigate = useNavigate()
  const [flipped, setFlipped] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [hoverProfile, setHoverProfile] = useState(false)
  const [hoverSettings, setHoverSettings] = useState(false)
  const [hoverLogOut, setHoverLogOut] = useState(false)

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
            onClick={() => navigate("/test")}
            className={styles.flashcard}
            src={images.FlashCard}
            alt="Flashcard"
          />
          <h1>Choose your favourite topic</h1>
        </div>
        <div className={styles.userTooltipContainer}>
          <div className={styles.userIcon}>
            <img
              width={50}
              height={50}
              src={images.UserProfileLogo}
              alt="User Profile"
            />
          </div>
          <div className={styles.tooltipMenu}>
            <div
              className={styles.tooltipItem}
              onMouseEnter={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
              onClick={() => navigate("/user-profile")}
            >
              <i
                className={
                  hoverProfile ? "fa-solid fa-user" : "fa-light fa-user"
                }
                style={{ color: "#6c63ff" }}
              ></i>{" "}
              Profile
            </div>
            <div
              className={styles.tooltipItem}
              onMouseEnter={() => setHoverSettings(true)}
              onMouseLeave={() => setHoverSettings(false)}
            >
              <i
                className={
                  hoverSettings ? "fa-solid fa-sliders" : "fa-light fa-sliders"
                }
                style={{ color: "#6c63ff" }}
              ></i>
              Settings
            </div>
            <div
              className={styles.tooltipItem}
              onMouseEnter={() => setHoverLogOut(true)}
              onMouseLeave={() => setHoverLogOut(false)}
            >
              <i
                className={
                  hoverLogOut
                    ? "fa-solid fa-right-from-bracket"
                    : "fa-light fa-right-from-bracket"
                }
                style={{ color: "#6c63ff" }}
              ></i>
              Logout
            </div>
          </div>
        </div>
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
