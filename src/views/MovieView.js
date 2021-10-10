import React from "react";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useLocation } from "react-router-dom";
import * as api from "../services/api";
import PageHeading from "../components/PageHeading/PageHeading";
import { MovieList } from "../components/MovieList/MovieList";

function MovieView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const savedQuery = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!savedQuery) {
      return;
    }
    api
      .fetchSearchQuery(savedQuery)
      .then((movies) => {
        setMovies(movies.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, [savedQuery]);

  const onInputChange = (event) => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError("");
    history.push({
      ...location,
      search: `query=${query}`,
    });

    api.fetchSearchQuery(query).then((movies) => {
      if (movies.results.length === 0) {
        setError(`Error! Movie ${query} not found`);
        return;
      }
      setMovies(movies.results);
    });
  };

  return (
    <div>
      <PageHeading text="Movies search" />
      <form onSubmit={onFormSubmit} action="">
        <input
          type="text"
          name="query"
          required
          placeholder="Movies search"
          autoComplete="off"
          value={query}
          onChange={onInputChange}
        />
      </form>

      {error ? <p> {error} </p> : <MovieList movies={movies} />}
    </div>
  );
}

export default MovieView;
