import React from "react"
import ReactDOM from "react-dom/client" // updated import statement for React 18
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root")) // updated for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) // updated render method for React 18
