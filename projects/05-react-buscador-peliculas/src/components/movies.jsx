function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.imgSrc} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoResultMovies() {
  return <p>No se ha encontraron peliculas para la busqueda.</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResultMovies />;
}
