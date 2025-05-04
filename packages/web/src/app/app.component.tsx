import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRoutes } from "./routes/app.route"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}
