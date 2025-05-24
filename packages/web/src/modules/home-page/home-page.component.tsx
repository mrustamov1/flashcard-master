import { images } from "../../assets"
import styles from "./home-page.module.css"
import { useNavigate } from "react-router-dom"

export function HomePage() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()

  // ---------------------------------------------------------------------------
  return (
    <>
      <main className={styles.content}>
        <div className={styles.container}>
          <article className={styles.homePageInfos}>
            <div className={styles.logoName}>
              <img
                className={styles.flashcard}
                src={images.FlashCard}
                alt="Flashcard"
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
              onClick={() => navigate("/sign-up")}
            >
              Join
              <img
                className={styles.arrowRight}
                src={images.ArrowRightWhite}
                alt=""
              />
            </button>
          </article>

          <img className={styles.homePageLogo} src={images.Logo} alt="Logo" />
        </div>
      </main>
    </>
  )
}
