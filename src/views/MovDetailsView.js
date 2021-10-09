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

const Cast = lazy(() => import("./CastView" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("./ReviewsView" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const history = useHistory();
  const { state } = history.location;
  const prevPage = `${state.url}${state.query}`;

  useEffect(() => {
    api.fetchMovieById(movieId).then((movie) => {
      setMovieDetails(movie);
    });
  }, [movieId]);

  return (
    <>
      <PageHeading text={movieDetails.title} />
      <Link
        type="button"
        to={prevPage ? prevPage : "/movies"}
        className={styles.btn}
      >
        Back
      </Link>

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

      {movieDetails && (
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: {
                  url: state.url,
                  query: state.query,
                },
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
                state: {
                  url: state.url,
                  query: state.query,
                },
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
