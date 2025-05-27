import { createContext, useContext, useState } from "react"

const QuestionContext = createContext(null)

export function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState([])

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  )
}

export function useQuestions() {
  return useContext(QuestionContext)
}
