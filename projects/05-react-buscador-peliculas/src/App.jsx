import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/use-movies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacía.");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un número.");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres.");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const { search, updateSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const counter = useRef(0); // valor que persiste entre renders
  counter.current++;
  console.log(counter.current);

  const changeHandler = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;

    updateSearch(newQuery);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getMovies();
  };

  const sortHandler = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={submitHandler}>
          <input
            name="query"
            value={search}
            onChange={changeHandler}
            type="text"
            placeholder="Avengers, Star War, The Matrix..."
            style={{
              border: "solid 1px",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <input type="checkbox" name="sort" value={sort} onChange={sortHandler} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
