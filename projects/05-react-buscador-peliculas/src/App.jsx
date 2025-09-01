import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/use-movies";
// import withNoResult from "./mocks/no-result.json";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();

  // const handlerClick = () => {
  //   const value = inputRef.current.value;
  //   console.log(value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const fields = new FormData(event.target);
    const query = fields.get("query");
    console.log(query);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={submitHandler}>
          <input
            ref={inputRef}
            name="query"
            type="text"
            placeholder="Avengers, Star War, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
