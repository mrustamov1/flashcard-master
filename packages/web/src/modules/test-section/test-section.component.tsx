import styles from "./test-section.module.css"
import flashcard from "../../assets/flashcard.png"
import userProfile from "../../assets/user-profile.png"
import { useState, useEffect } from "react"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

export function TestSection() {
  const [allCountries, setAllCountries] = useState<
    { country: string; capital: string }[]
  >([])
  const [currentQuestion, setCurrentQuestion] = useState(0) // Start from 0 index
  const [flipped, setFlipped] = useState(false)
  const totalQuestions = 20

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()
        const mapped = data.map((country: any) => ({
          country: country.name.common,
          capital: country.capital ? country.capital[0] : "No Capital",
        }))
        // Shuffle the array and pick first 20 countries
        const shuffled = mapped
          .sort(() => 0.5 - Math.random())
          .slice(0, totalQuestions)
        setAllCountries(shuffled)
      } catch (error) {
        console.error("Failed to fetch countries:", error)
      }
    }
    fetchCountries()
  }, [])

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setFlipped(false)
    } else {
      alert("You have completed all questions!")
      // Optionally, restart or navigate somewhere
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setFlipped(false)
    }
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
      {allCountries.length > 0 && (
        <div className={styles.cardContainer}>
          <div
            className={`${styles.answers} ${flipped ? styles.flipped : ""}`}
            onClick={() => setFlipped(true)}
          >
            <div>
              <div className={styles.cardFront}>
                {allCountries[currentQuestion].country}
              </div>
              <div className={styles.cardBack}>
                {allCountries[currentQuestion].capital}
              </div>
            </div>
          </div>

          {/* Show buttons after flipping */}
          <div className={styles.b}>
            {flipped && (
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
            )}

            {/* Prev and Next Buttons */}
            <div className={styles.navigationButtons}>
              <img src={arrowLeft} alt="" onClick={handlePrev} />
              <img src={arrowRight} alt="" onClick={handleNext} />
            </div>
          </div>
        </div>
      )}

      {allCountries.length === 0 && (
        <div className={styles.loading}>Loading countries...</div>
      )}
    </main>
  )
}
