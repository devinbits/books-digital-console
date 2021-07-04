import axios from 'axios';

// const BASE_URL = 'https://digi-books.herokuapp.com/auth/login';
const BASE_URL = 'http://localhost/';

const GetService = (authToken, baseURL = BASE_URL, headers = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
  return axios.create({
    baseURL,
    headers: { ...defaultHeader, ...headers },
  });
};

export default GetService;
