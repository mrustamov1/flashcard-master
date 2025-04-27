import styles from "./test.module.css"
import flashcard from "../../assets/flashcard.png"
import userProfile from "../../assets/user-profile.png"
import card from "../../assets/card.svg"

export function Test() {
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
        <div className={styles.card}>
          <img src={card} alt="" />
          Flashcard
        </div>
        <div className={styles.card}>k;</div>
        <div className={styles.card}>k;</div>
        <div className={styles.card}>k;</div>
      </div>
      <div className={styles.answers}></div>
    </main>
  )
}
