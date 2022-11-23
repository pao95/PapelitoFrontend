import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { SppinerProvider } from "./context/SppinerProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SppinerProvider>
      <ToastContainer />
      <App />
    </SppinerProvider>
  </React.StrictMode>
);
