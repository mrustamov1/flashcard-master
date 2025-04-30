import { useState } from "react"
import styles from "./user-profile.module.css"
import user from "../../assets/user-profile.png"
import { Input } from "../../ui-components/input/input.component"
import { useNavigate } from "react-router-dom"

export function UserProfile() {
  const [hover, setHover] = useState(false)
  const [hoverEdit, setHoverEdit] = useState(false)
  const navigate = useNavigate()
  
  return (
    <main className={styles.content}>
      <i
        onClick={() => navigate(-1)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ cursor: "pointer" }}
        className={
          hover ? "fa-solid fa-chevrons-left" : "fa-light fa-chevrons-left"
        }
      ></i>
      <section className={styles.userHeaderInfo}>
        <span>Profile</span>
        <span>Settings</span>
        <span>Progress</span>
        <span>Chart</span>
      </section>
      <section className={styles.userCard}>
        <div className={styles.card}>
          <div className={styles.userSideBar}>
            <img src={user} alt="User" />
            <h1>Muhammad Rustamov</h1>
            <h1>Software Engineer</h1>
            <div
              className={hoverEdit ? styles.hovered : styles.default}
              onMouseEnter={() => setHoverEdit(true)}
              onMouseLeave={() => setHoverEdit(false)}
            >
              <h3 style={{ color: "#FFFFFF" }}>Edit</h3>
              <i
                style={{ color: "#FFFFFF" }}
                className={hoverEdit ? "fa-solid fa-pen" : "fa-solid fa-edit"}
              ></i>
            </div>
          </div>
          <div className={styles.personalInfo}>
            <span className={styles.infoTitle}>Personal information</span>
            <div className={styles.inputs}>
              <Input label="Name" type="text" />
              <Input label="Surname" type="text" />
              <Input label="Email" type="email" />
              <Input label="Phone number" type="tel" />
              <Input label="Role" type="text" />
              <Input label="Profession" type="text" />
            </div>
            <textarea rows={7} placeholder="hello" />
          </div>
        </div>
      </section>
    </main>
  )
}
