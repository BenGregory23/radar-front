import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>  
      <NextUIProvider>
        <App />
      </NextUIProvider>
      
    </Provider>
  </React.StrictMode>,
)
