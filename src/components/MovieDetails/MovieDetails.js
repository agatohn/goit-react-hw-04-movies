import PropTypes from "prop-types";
import styles from "../../views/Styles.module.css";
import Container from "../Container/Container";

export function MovieDetails({ movieDetails }) {
  return (
    <Container>
      <div className={styles.movieDetailsPage}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
          }
          alt={movieDetails.title}
          width="300"
          height="250"
        />
        <ul className={styles.list}>
          <li>
            <h2 className={styles.title}>{movieDetails.title}</h2>
          </li>
          <li>
            <span
              className={styles.text}
            >{`Release date: ${movieDetails.release_date}`}</span>
          </li>
          <li>
            <span className={styles.text}>{`Rating: ${
              movieDetails.vote_average * 10
            }%`}</span>
          </li>
          <li>
            <span className={styles.text}>{`Genre: ${
              movieDetails.genres
                ? movieDetails.genres.map((genre) => genre.name).join(", ")
                : "No genre"
            }`}</span>
          </li>
          <li>
            <span
              className={styles.text}
            >{`Overview: ${movieDetails.overview}`}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

MovieDetails.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
