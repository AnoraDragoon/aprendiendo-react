import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./style.css";
import { FiltersProvider } from "./contexts/filters";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
);
