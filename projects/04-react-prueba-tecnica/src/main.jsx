import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <h1>Hello World!!</h1>
  </StrictMode>
);
