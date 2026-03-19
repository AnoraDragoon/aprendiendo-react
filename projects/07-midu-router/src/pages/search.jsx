import { useEffect } from "react";

export default function Searchpage({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`;
  }, [routeParams.query]);

  return (
    <>
      <h1>Has buscado {routeParams.query}</h1>
    </>
  );
}
