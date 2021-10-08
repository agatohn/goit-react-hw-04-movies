const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '43599aecc4a107996f3426684f8b9f50';

export function fetchTrending() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    },
  );
}

export function fetchSearchQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  ).then(response => {
    return response.json();
  });
}

export function fetchMovieById(id) {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    return response.json();
  });
}

export function fetchMovieCredits(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    return response.json();
  });
}

export function fetchMovieReviews(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    return response.json();
  });
}
