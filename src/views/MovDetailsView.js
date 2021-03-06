import React from "react";
import { useState, useEffect, lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  useParams,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import * as api from "../services/api";
import styles from "./Styles.module.css";
import PageHeading from "../components/PageHeading/PageHeading";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import DetailsNavigation from "../components/DetailsNavigation/DetailsNavigation";

const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    movieId
      ? api.fetchMovieById(movieId).then((movie) => {
          setMovieDetails(movie);
        })
      : api.fetchMovieById(state.id).then((movie) => {
          setMovieDetails(movie);
        });
  }, [movieId]);

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <PageHeading text={movieDetails.title} />
      <button className={styles.btn} type="button" onClick={goBack}>
        Go back
      </button>
      <MovieDetails movieDetails={movieDetails} />
      <DetailsNavigation movieId={movieId} />
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
            <Cast movieId={movieId} />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
