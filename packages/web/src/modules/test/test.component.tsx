import styles from "./test.module.css"
import flashcard from "../../assets/flashcard.png"
import userProfile from "../../assets/user-profile.png"
import card from "../../assets/card.svg"
import arrowRight from "../../assets/arrow-right.svg"
import { useNavigate } from "react-router-dom"
import arrowFatLine from '../../assets/arrow-fat-lines-up.svg'

export function Test() {
  const navigate = useNavigate()
  
  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img className={styles.flashcard} src={flashcard} alt="Flashcard" />
          <h1>Flashcard Master</h1>
        </div>
        <img width={50} height={50} src={userProfile} alt="User Profile" />
      </div>

      <div className={styles.cards}>
        <div className={styles.card} onClick={() => navigate("/topics")}>
          <img src={card} alt="Topic Card" />
          <span>Choose a topic</span>
          <img
            className={styles.arrowRight}
            src={arrowRight}
            alt="Arrow Right"
          />
        </div>
        <div className={styles.card} onClick={() => navigate("/test-section")}>
          <img src={card} alt="Random Topic Card" />
          <span>Random Topic</span>
          <img
            className={styles.arrowRight}
            src={arrowRight}
            alt="Arrow Right"
          />
        </div>

        <div className={styles.card}>
          <img src={card} alt="Learning Card" />
          <span>Learning</span>
          <img
            className={styles.arrowRight}
            src={arrowRight}
            alt="Arrow Right"
          />
        </div>

        <div className={styles.card}>
          <img src={card} alt="Guide Card" />
          <span>Guide about quiz</span>
          <img
            className={styles.arrowRight}
            src={arrowRight}
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
          <img className={styles.arrowFatLines} src={arrowFatLine} alt="Arrow Up" />
        </div>
      </div>
    </main>
  )
}
