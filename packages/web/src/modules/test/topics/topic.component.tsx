import styles from "./topic.module.css"
import flashcard from "../../../assets/flashcard.png"
import userProfile from "../../../assets/user-profile.png"
import arrowRight from "../../../assets/arrow-right-white.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export function Topics() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  )
  const navigate = useNavigate()

  // Fetch categories from OpenTDB
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://opentdb.com/api_category.php")
        const data = await res.json()
        setCategories(data.trivia_categories) // The categories come in `trivia_categories`
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      }
    }

    fetchCategories()
  }, [])

  const handleChooseTopic = (categoryId: number) => {
    navigate(`/test-section/${categoryId}`)
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
            {categories.map((topic) => (
              <tr key={topic.id}>
                <td>{topic.id}</td>
                <td>{topic.name}</td>
                <td>
                  <button
                    className={styles.actions}
                    onClick={() => handleChooseTopic(topic.id)}
                  >
                    Press to choose{" "}
                    <img
                      className={styles.actionImage}
                      src={arrowRight}
                      alt=""
                    />
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
