import { useState } from "react"
import styles from "./topic.module.css"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import flashcard from "../../../assets/flashcard.png"
import userProfile from "../../../assets/user-profile.png"
import arrowRight from "../../../assets/arrow-right-white.svg"

export function Topics() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  async function fetchCategories() {
    const res = await fetch("https://opentdb.com/api_category.php")
    const data = await res.json()
    return data.trivia_categories
  }

  const { data: topics, isLoading } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["topics"],
    staleTime: Infinity
  })

  if (isLoading) {
    ;<div>Loading...</div>
  }

  const filteredItems = topics?.filter((topic) => {
    return topic.name.toLowerCase().includes(query.toLowerCase())
  })

  function handleChooseTopic(categoryId: number) {
    navigate(`/test-section/${categoryId}`)
  }

  // ---------------------------------------------------------------------------
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
        <input
          value={query}
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
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
            {filteredItems?.map((topic: any) => (
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
