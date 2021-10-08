import React from "react";
import { useState, useEffect } from "react";
import * as api from "../services/api";
import PageHeading from "../components/PageHeading/PageHeading";
import { MovieList } from "../components/MovieList/MovieList";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTrending().then((movies) => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <>
      <PageHeading text="Trending movies" />
      <MovieList movies={movies} />
    </>
  );
}
