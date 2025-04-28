import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./sign-in.module.css"
import { useNavigate } from "react-router-dom"
import { UserLoginType } from "../../types/user.type"

export function SignIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginType>()
  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
    try {
      const response = await fetch("http://localhost:9090/user/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      })

      if (!response.ok) {
        console.log("Invalid email or password")
        return false
      }

      await response.json()
      navigate("/test")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className={styles.content}>
      <form className={styles.container} onClick={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Sign In </h1>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your email address</label>
          <input
            {...register("email", {
              required: "Enter valid email address",
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
            placeholder="Email address..."
          />
          {errors && (
            <div className={styles.error}>{errors.email?.message}</div>
          )}
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="text"
            placeholder="Password..."
          />
          {errors && (
            <div className={styles.error}>{errors.email?.message}</div>
          )}
        </div>
        <button type="submit" className={styles.singUpButton}>
          Sign In
        </button>
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
      </form>
    </section>
  )
}
