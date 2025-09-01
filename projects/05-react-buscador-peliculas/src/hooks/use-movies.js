import responseMovies from "../mocks/result.json";

export function useMovies() {
  const movies = responseMovies.Search;

  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      imgSrc: movie.Poster,
      type: movie.Type,
    };
  });
  return { movies: mappedMovies };
}
