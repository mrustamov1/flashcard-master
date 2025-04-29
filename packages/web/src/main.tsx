// import { StrictMode } from 'react'
import "./styles/font-awesome.css"
import "./styles/global.module.css"
import { createRoot } from "react-dom/client"
import { App } from "./app/app.component.tsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </StrictMode>,
)
