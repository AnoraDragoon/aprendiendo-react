import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";
import {} from "react";
// import withResults from "../mocks/result.json";
// import withoutResults from "../mocks/no-result.json";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading, error };
}
