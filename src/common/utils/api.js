const axios = require('axios');
const baseUrl = 'https://chuck-jokes-api.herokuapp.com/api';

export const getCategories = () => {
  return axios.get(`${baseUrl}/categories`);
}

export const getJokes = (params) => {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return axios.get(`${baseUrl}/jokes?${queryString}`);
}

export const getJoke = (id) => {
  return axios.get(`${baseUrl}/jokes/${id}`);
}

export const likeJoke = (id) => {
  return axios.put(`${baseUrl}/jokes/like/${id}`);
}

export const dislikeJoke = (id) => {
  return axios.put(`${baseUrl}/jokes/dislike/${id}`);
}
