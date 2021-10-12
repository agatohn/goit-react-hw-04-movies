import React from "react";
import { useState, useEffect, lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  useParams,
  Switch,
  Route,
  NavLink,
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";
import * as api from "../services/api";
import styles from "./Styles.module.css";
import PageHeading from "../components/PageHeading/PageHeading";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";

const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  // const history = useHistory();
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    movieId
      ? api.fetchMovieById(movieId).then((movie) => {
          setMovieDetails(movie);
        })
      : api.fetchMovieById(state.id).then((movie) => {
          setMovieDetails(movie);
        });
  }, [movieId]);

  return (
    <>
      <PageHeading text={movieDetails.title} />
      <Link
        type="button"
        to={state ? `${state.url}${state.query}` : "/"}
        className={styles.btn}
      >
        Back
      </Link>
      <MovieDetails movieDetails={movieDetails} />
      {/* <div className={styles.movieDetailsPage}>
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
      </div> */}

      {movieDetails && (
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
              }}
              activeClassName={styles.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
              }}
              activeClassName={styles.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      )}

      <Suspense
        fallback={
          <div>
            <Loader
              className="Loader"
              type="ThreeDots"
              color="#00BFFF"
              height={20}
              width={100}
              timeout={3000}
            />
          </div>
        }
      >
        <Switch>
          <Route path="/movies/:movieId/cast">
            {movieDetails && <Cast movieId={movieId} />}
          </Route>
          <Route path="/movies/:movieId/reviews">
            {movieDetails && <Reviews movieId={movieId} />}
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
