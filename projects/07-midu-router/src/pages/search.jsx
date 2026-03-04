import { useEffect, useRef, useState } from "react";

export function Searchpage({ routeParams }) {
  const counterRef = useRef(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`;
    counterRef.current++;
    setCounter(counterRef.current);
  }, [routeParams.query]);

  return (
    <>
      <h1>Has buscado {routeParams.query}</h1>
      <p>Busquedas: {counter}</p>
    </>
  );
}
