import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";
import styles from "./Styles.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api
      .fetchMovieReviews(movieId)
      .then((movie) => {
        setReviews(movie.results);
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
      <h2>Reviews:</h2>
      {reviews.length !== 0 ? (
        <>
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className={styles.movieDetailsPage}>
                <p className={styles.text}>{`Author: ${review.author}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Not found any reviews</p>
      )}
    </>
  );
}
