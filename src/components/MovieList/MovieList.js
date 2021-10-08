import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

export function MovieList({ movies }) {
  return (
    <div>
      <ul className={styles.movieList}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={styles.movieCard}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.movieImg}
                />
                <h3 className={styles.movieTitle}>{movie.title}</h3>
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
