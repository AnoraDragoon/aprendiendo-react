import { useState } from "react";
// import withResult from "../mocks/result.json";
import withNoResult from "../mocks/no-result.json";
import { API_URL } from "../environments/dev";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search ?? [];

  const mappedMovies = movies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      imgSrc: movie.Poster,
      type: movie.Type,
    };
  });

  const getMovies = () => {
    if (search) {
      fetch(`${API_URL}&s=${search}`)
        .then((res) => res.json())
        .then((json) => setResponseMovies(json));
      // setResponseMovies(withResult);
    } else {
      setResponseMovies(withNoResult);
    }
  };

  return { movies: mappedMovies, getMovies };
}
