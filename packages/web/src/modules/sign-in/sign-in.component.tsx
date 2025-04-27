import styles from "./sign-in.module.css"
import { useNavigate } from "react-router-dom"

export function SignIn() {
  const navigate = useNavigate()
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign In </h1>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your email address</label>
          <input type="text" placeholder="Email address..." />
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your password</label>
          <input type="text" placeholder="Password..." />
        </div>
        <button className={styles.singUpButton}>Sign In</button>
        <p className={styles.signInText}>
          I already have an account
          <b
            className={styles.directSingUp}
            onClick={() => navigate("/sign-up")}
          >
            {" "}
            Sign Up
          </b>
        </p>
      </div>
    </section>
  )
}
