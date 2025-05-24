import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRoutes } from "./routes/app.route"
// import { QuestionProvider } from "../context/questions.context"

const queryClient = new QueryClient()

export function App() {
  return (
    // <QuestionProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    // </QuestionProvider>
  )
}
