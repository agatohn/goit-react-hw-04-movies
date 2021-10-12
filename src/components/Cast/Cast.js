import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/api";
import styles from "../../views/Styles.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api
      .fetchMovieCredits(movieId)
      .then((movie) => {
        setCast(movie.cast);
      })
      .finally(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      );
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <h2>Cast:</h2>
          <ul className={styles.actorsList}>
            {cast.map((actor) => (
              <li key={actor.id} className={styles.actorCard}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
                  }
                  alt={`${actor.name}`}
                />
                <p className={styles.text}>{actor.original_name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
