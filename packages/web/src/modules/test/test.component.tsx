import styles from "./test.module.css"
import flashcard from "../../assets/flashcard.png"
import userProfile from "../../assets/user-profile.png"
import card from "../../assets/card.svg"
import arrowRight from "../../assets/arrow-right.svg"
import arrowFatLines from "../../assets/arrow-fat-lines-up.svg"
import { useNavigate } from "react-router-dom"

export function Test() {
  const navigate = useNavigate()
  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img className={styles.flashcard} src={flashcard} alt="Falshcard" />
          <h1>Flashcard Master</h1>
        </div>
        <img width={50} height={50} src={userProfile} alt="User" />
      </div>
      <div className={styles.cards}>
        <div className={styles.card} onClick={() => navigate('/topics')}>
          <img src={card} alt="" />
          Choose a topic{" "}
          <img className={styles.arrowRight} src={arrowRight} alt="" />
        </div>
        <div className={styles.card}>
          <img src={card} alt="" />
          Random Topic
          <img className={styles.arrowRight} src={arrowRight} alt="" />
        </div>
        <div className={styles.card}>
          <img src={card} alt="" />
          Learning
          <img className={styles.arrowRight} src={arrowRight} alt="" />
        </div>
        <div className={styles.card}>
          <img src={card} alt="" />
          Guide about quiz
          <img className={styles.arrowRight} src={arrowRight} alt="" />
        </div>
      </div>
      <div className={styles.answers}>
        <h1 className={styles.title}>Welcome to Flashcard</h1>
        <h3 className={styles.desc}>
          This platform sharpens your mind and accelerates your learning through
          quick and effective practice
        </h3>
        <div className={styles.top}>
          <img className={styles.arrowFatLines} src={arrowFatLines} alt="" />
        </div>
      </div>
    </main>
  )
}
