import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home" */)
);
const MovieView = lazy(() =>
  import("./views/MovieView" /* webpackChunkName: "movie" */)
);
const MovieDetailsView = lazy(() =>
  import("./views/MovDetailsView.js" /* webpackChunkName: "movie-details" */)
);

export function App() {
  return (
    <Container>
      <AppBar />
      <hr />
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
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MovieView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
