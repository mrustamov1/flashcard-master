import { CSSProperties, useEffect, useState } from "react"
import styles from "./input.module.css"
import classNames from "classnames"

export function Input({
  containerClassName,
  wrapperClassName,
  label,
  required = false,
  type,
  description,
  showErrorText = true,
  error,
  context,
  contextClassName,
  iconClassName,
  onIconClick,
  onValueChange,
  autofocus,
  onEscape,
  onEnter,
  validation,
  inputRef,
  ...otherProps
}: {
  containerClassName?: string
  wrapperClassName?: string
  label?: string
  required?: boolean
  type: React.HTMLInputTypeAttribute
  description?: string
  showErrorText?: boolean
  error?: string
  context?: string
  contextClassName?: string | undefined
  iconClassName?: string | undefined
  iconStyle?: CSSProperties
  onIconClick?: () => void
  onValueChange?: (value: string) => void
  autofocus?: boolean
  onEscape?: () => unknown
  onEnter?: () => unknown
  validation?: {
    condition: (value: string) => boolean
    errorMessage: string
  }
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
} & React.InputHTMLAttributes<HTMLInputElement>) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [isFocused, setFocused] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [inputType, setInputType] = useState<
    React.HTMLInputTypeAttribute | undefined
  >()

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setInputType(type)
  }, [type])

  // ---------------------------------------------------------------------------
  return (
    <div
      className={classNames({
        [containerClassName ? containerClassName : ""]: true,
        [styles.container]: true,
      })}
    >
      {/* --------------------------------------------------------------------------- */}
      {/* LABEL */}
      {/* --------------------------------------------------------------------------- */}

      {label && (
        <>
          <span
            className={styles.label}
            style={otherProps.disabled ? { color: "#A0ACB0" } : {}}
          >
            {label} {required && <span className={styles.required}>*</span>}
          </span>
        </>
      )}

      <div
        className={classNames({
          [styles.inputWrapper]: true,
          [styles.focused]: isFocused == true,
          [styles.error]: error,
          [wrapperClassName ? wrapperClassName : ""]: wrapperClassName,
        })}
        style={otherProps.disabled ? { background: "#F7F7F7" } : {}}
      >
        {/* --------------------------------------------------------------------------- */}
        {/* INPUT */}
        {/* --------------------------------------------------------------------------- */}

        <input
          ref={inputRef}
          type={inputType}
          onChange={
            onValueChange
              ? (e) => {
                  onValueChange(e.target.value)
                }
              : undefined
          }
          {...otherProps}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={() => {
            setFocused(false)
          }}
        />

        {/* --------------------------------------------------------------------------- */}
        {/* EYE FOR PASSWORD */}
        {/* --------------------------------------------------------------------------- */}

        {type === "password" && (
          <>
            <div className={styles.iconEyeWrapper}>
              {!showPassword ? (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setInputType("text")
                  }}
                  className="far fa-eye-slash"
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setInputType("password")
                  }}
                  className="far fa-eye"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </>
        )}

        {type === "search" && (
          <>
            <div className={styles.iconEyeWrapper}>
              <i
                onClick={onIconClick}
                className={iconClassName}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        )}
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* DESCRIPTION */}
      {/* --------------------------------------------------------------------------- */}

      {description && <span className={styles.description}>{description}</span>}

      {/* --------------------------------------------------------------------------- */}
      {/* ERROR */}
      {/* --------------------------------------------------------------------------- */}

      {error && showErrorText && (
        <span className={styles.errorText}>{error}</span>
      )}
    </div>
  )
}
