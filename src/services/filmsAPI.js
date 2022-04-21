import api from './api';

const apiKey = 'api_key=c2e78b4a8c14e65dd6e27504e6df95ad';
const language = 'Language=pt-BR';

export const GetFilmsTrending = (page) => {
  const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const GetFilmsNowPlaying = (page) => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const GetGenders = () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}&${language}`;
  return api.get(url);
};

