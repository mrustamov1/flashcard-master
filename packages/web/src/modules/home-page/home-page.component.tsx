import logo from "../../assets/logo.svg"
import styles from "./home-page.module.css"
import flashcard from "../../assets/flashcard.png"
import { useNavigate } from "react-router-dom"

export function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <main className={styles.content}>
        <div className={styles.container}>
          <article className={styles.homePageInfos}>
            <div className={styles.logoName}>
              <img
                className={styles.flashcard}
                src={flashcard}
                alt="Falshcard"
              />
              <h1>Flashcard Master</h1>
            </div>
            <div className={styles.titleAndDesc}>
              <span className={styles.title}>
                Master Anything with Flashcards!
              </span>
              <span className={styles.subTitle}>
                Study smarter, faster, and never get bored
              </span>
            </div>
            <button
              className={styles.joinButton}
              onClick={() => navigate("/test")}
            >
              Join
            </button>
          </article>

          <img className={styles.homePageLogo} src={logo} alt="Logo" />
        </div>
      </main>
    </>
  )
}
