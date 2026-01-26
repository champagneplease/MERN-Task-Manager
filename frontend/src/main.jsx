import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavBar } from "./components/NavBar";

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,
);
