import axios from 'axios';

const client = axios.create();

client.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error)
);

client.interceptors.response.use(
  function (response) {
    try {
      return response?.data?.results;
    } catch (error) {
      throw error;
    }
  },
  function (error) {
    throw error;
  }
);

export default client;
