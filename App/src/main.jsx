import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import QuizContextProvider from "./context/QuizContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizContextProvider>
    <App />
  </QuizContextProvider>
);
