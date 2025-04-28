import styles from "./topic.module.css"
import flashcard from "../../../assets/flashcard.png"
import userProfile from "../../../assets/user-profile.png"
import arrowRight from "../../../assets/arrow-right-white.svg"
const filteredTopics = [
  {
    id: 1,
    name: "Art",
    actions: "Press to choose",
  },
  {
    id: 2,
    name: "Nature",
    actions: "Press to choose",
  },
  {
    id: 3,
    name: "Countries",
    actions: "Press to choose",
  },
]

export function Topics() {
  return (
    <main className={styles.content}>
      <div className={styles.user}>
        <div className={styles.logoName}>
          <img className={styles.flashcard} src={flashcard} alt="Flashcard" />
          <h1>Choose your favourite topic</h1>
        </div>
        <img width={50} height={50} src={userProfile} alt="User" />
      </div>
      <article className={styles.search}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </article>
      <div className={styles.tableContent}>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Topic name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTopics.map((topic, index) => (
              <tr key={index}>
                <td>{topic.id}</td>
                <td>{topic.name}</td>
                <td>
                  <button className={styles.actions}>
                    {topic.actions} <img className={styles.actionImage} src={arrowRight} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
