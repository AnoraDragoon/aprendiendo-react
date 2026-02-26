import { useEffect, useState } from "react";
import "./App.css";

// const NAVIGATION_EVENT = "pushstate";

// function navigate(href) {
//   window.history.pushState({}, "", href);
//   const navigationEvent = new Event(NAVIGATION_EVENT);
//   window.dispatchEvent(navigationEvent);
// }

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página principal. Crear un reactrouter desde cero.</p>
      <a href="/about">Ir a Sobre nosotros</a>
    </>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img src="/vite.svg" alt="Logo" />
      <p>¡Hola! Me llamo Osvaldo y estoy creando un clone de React Router.</p>
      <a href="/">Ir al Home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(globalThis.location.pathname);

  // useEffect(() => {
  //   const onLocationChange = () => {
  //     setCurrentPath(window.location.pathname);
  //   };
  //   window.addEventListener(NAVIGATION_EVENT, onLocationChange);

  //   return () => window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
  // }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
