import axios from 'axios';


const api = axios.create({
  baseUrl: 'https://api.themoviedb.org/3/',
});

export default api;