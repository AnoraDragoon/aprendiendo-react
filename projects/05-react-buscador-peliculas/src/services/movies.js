import { API_URL } from "../environments/dev";

export async function searchMovies({ search }) {
  if (!search) return [];

  try {
    const response = await fetch(`${API_URL}&s=${search}`);
    const json = await response.json();
    const movies = json.Search ?? [];

    const mappedMovies = movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        imgSrc: movie.Poster,
        type: movie.Type,
      };
    });

    return mappedMovies;
  } catch (err) {
    throw new Error(`Error loading movies: ${err}`);
  }
}
