import axios from 'axios';
import React from 'react';


const api = axios.create({
  baseUrl: 'https://api.themoviedb.org/3',
});

export default api;