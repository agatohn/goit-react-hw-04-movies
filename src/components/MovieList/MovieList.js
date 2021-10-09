import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

export function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={styles.movieList}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={styles.movieCard}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    url: location.pathname,
                    query: location.search,
                  },
                }}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
                  }
                  alt={movie.title}
                  className={styles.movieImg}
                />
                <p className={styles.movieTitle}>{movie.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};
