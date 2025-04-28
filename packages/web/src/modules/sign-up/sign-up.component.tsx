import { useNavigate } from "react-router-dom"
import styles from "./sign-up.module.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserRegisterType } from "../../types/user.type"

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>()

  const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
    try {
      const response = await fetch("http://localhost:9090/user/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Sign Up </h1>
        <div className={styles.starterInputs}>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Enter your name</label>
            <input
              {...register("name", {
                required: "All field are required",
              })}
              type="text"
              placeholder="Name..."
            />
            {errors && (
              <div className={styles.error}>{errors.name?.message}</div>
            )}
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="">Enter your surname</label>
            <input
              {...register("surname", {
                required: "All field are required",
              })}
              type="text"
              placeholder="Surname..."
            />
            {errors && (
              <div className={styles.error}>{errors.name?.message}</div>
            )}
          </div>
        </div>
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
          {errors && <div className={styles.error}>{errors.name?.message}</div>}
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Enter your password</label>
          <input
            {...register("password", {
              required: "All field are required",
            })}
            type="text"
            placeholder="Password..."
          />
          {errors && <div className={styles.error}>{errors.name?.message}</div>}
        </div>
        <div className={styles.inputAndLabel}>
          <label htmlFor="">Confirm your password</label>
          <input
            {...register("confirmPassword")}
            type="text"
            placeholder="Confirm password..."
          />
          {errors && <div className={styles.error}>{errors.name?.message}</div>}
        </div>
        <button type="submit" className={styles.singUpButton}>
          Sign Up
        </button>
        <p className={styles.signInText}>
          I already have an account{" "}
          <b
            className={styles.signInButton}
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </b>
        </p>
      </form>
    </section>
  )
}
