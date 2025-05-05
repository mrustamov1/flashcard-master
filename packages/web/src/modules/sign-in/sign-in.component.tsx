import styles from "./sign-in.module.css"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui-components/input/input.component"
import { UserLoginSchema, UserLoginType } from "../../types/user.type"

export function SignIn() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginType>({
    resolver: zodResolver(UserLoginSchema),
  })

  // ---------------------------------------------------------------------------
  // fetch
  // ---------------------------------------------------------------------------
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

      const { id, name, surname, email } = await response.json()
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ id, name, surname, email }),
      )

      const { access } = await response.json()
      localStorage.setItem("accessToken", access)

      navigate("/test")
    } catch (error) {
      console.log(error)
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <form className={styles.container} onClick={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Sign In </h1>
        <Input
          label="Enter your email address"
          {...register("email")}
          type="text"
          placeholder="Email address..."
          error={errors.email?.message}
        />
        <Input
          label="Enter your password"
          {...register("password")}
          type="text"
          placeholder="Email address..."
          error={errors.password?.message}
        />
        <button type="submit" className={styles.singUpButton}>
          Sign In
        </button>
        <p className={styles.signInText}>
          I already have an account
          <b
            className={styles.directSingUp}
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </b>
        </p>
      </form>
    </section>
  )
}
