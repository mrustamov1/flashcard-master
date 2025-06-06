import { useState } from "react"
import { images } from "../../assets"
import styles from "./test.module.css"
import { useNavigate } from "react-router-dom"
// import { useQuestions } from "../../context/questions.context"

export function Test() {
  const navigate = useNavigate()
  const [hoverProfile, setHoverProfile] = useState(false)
  const [hoverSettings, setHoverSettings] = useState(false)
  const [hoverLogOut, setHoverLogOut] = useState(false)
  // const { setQuestions } = useQuestions()

  // async function handleRandomTopicClick() {
  //   try {
  //     const res = await fetch("https://opentdb.com/api.php?amount=16")
  //     const data = await res.json()
  //     setQuestions(data.results) // Store questions in context
  //     navigate("/test-section") // Navigate after data is set
  //   } catch (err) {
  //     console.error("Error fetching random questions", err)
  //   }
  // }
  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img
            className={styles.flashcard}
            src={images.FlashCard}
            alt="Flashcard"
          />
          <h1>Flashcard Master</h1>
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

      <div className={styles.cards}>
        <div className={styles.card} onClick={() => navigate("/topics")}>
          <i
            className="fa-duotone fa-solid fa-cards-blank"
            style={{ fontSize: "25px", color: "#6c63ff" }}
          ></i>
          <span>Choose a topic</span>
          <img
            className={styles.arrowRight}
            src={images.ArrowRight}
            alt="Arrow Right"
          />
        </div>

        <div className={styles.card} >
          <i
            className="fa-solid fa-rectangles-mixed"
            style={{ fontSize: "25px", color: "#6c63ff" }}
          ></i>
          <span>Random Topic</span>
          <img
            className={styles.arrowRight}
            src={images.ArrowRight}
            alt="Arrow Right"
          />
        </div>

        <div className={styles.card}>
          <i
            className="fa-duotone fa-solid fa-chalkboard"
            style={{ fontSize: "25px", color: "#6c63ff" }}
          ></i>
          <span>Learning</span>
          <img
            className={styles.arrowRight}
            src={images.ArrowRight}
            alt="Arrow Right"
          />
        </div>

        <div className={styles.card}>
          <i
            className="fa-solid fa-circle-question"
            style={{ fontSize: "25px", color: "#6c63ff" }}
          ></i>
          <span>Guide about quiz</span>
          <img
            className={styles.arrowRight}
            src={images.ArrowRight}
            alt="Arrow Right"
          />
        </div>
      </div>

      <div className={styles.answers}>
        <h1 className={styles.title}>Welcome to Flashcard</h1>
        <h3 className={styles.desc}>
          This platform sharpens your mind and accelerates your learning through
          quick and effective practice.
        </h3>
        <div className={styles.top}>
          <img
            className={styles.arrowFatLines}
            src={images.ArrowFatLines}
            alt="Arrow Up"
          />
        </div>
      </div>
    </main>
  )
}
