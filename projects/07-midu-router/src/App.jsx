import { useEffect, useState } from "react";
import "./App.css";
import { EVENTS } from "./utils/consts";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página principal. Crear un reactrouter desde cero.</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre nosotros</button>
    </>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img src="/vite.svg" alt="Logo" />
      <p>¡Hola! Me llamo Osvaldo y estoy creando un clone de React Router.</p>
      <button onClick={() => navigate("/")}>Ir al Home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(globalThis.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
