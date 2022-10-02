import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PaycheckProvider from "./context/PaycheckProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PaycheckProvider>
      <App />
    </PaycheckProvider>
  </React.StrictMode>
);
