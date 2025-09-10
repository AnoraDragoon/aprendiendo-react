import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   * Effect to follow the pointer
   */
  useEffect(() => {
    console.log("evect ", { enabled });
    const moveHandler = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", moveHandler);
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las depedencias antes de ejecutar el efecto.
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", moveHandler);
    };
  }, [enabled]);

  /**
   * Effect to hide cursor when follower is on.
   */
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          width: 40,
          height: 40,
          left: -20,
          top: -20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button
        type="button"
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Desactivar" : "Activar"} seguir el puntero
      </button>
    </>
  );
}

export default App;
