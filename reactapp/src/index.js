import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "react-toastify/dist/ReactToastify.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./utils/TokenContext";

const decodedToken = JSON.parse(localStorage.getItem("decodedToken")); // Retrieve decodedToken from localStorage
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenProvider decodedToken={decodedToken}>
      <App />
    </TokenProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
