import { useNavigate } from "react-router-dom"
import styles from "./sign-up.module.css"

export function SignUp() {
  const navigate = useNavigate()
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up </h1>
        <div className={styles.starterInputs}>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Enter your name</label>
            <input type="text" placeholder="Name..." />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Enter your suraname</label>
            <input type="text" placeholder="Surname..." />
          </div>
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your email address</label>
          <input type="text" placeholder="Email address..." />
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your password</label>
          <input type="text" placeholder="Password..." />
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your confirm password</label>
          <input type="text" placeholder="Confirm password..." />
        </div>
        <button className={styles.singUpButton}>Sign Up</button>
        <p className={styles.signInText}>
          I already have an account{" "}
          <b
            className={styles.signInButton}
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </b>
        </p>
      </div>
    </section>
  )
}
