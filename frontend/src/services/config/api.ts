import axios from 'axios';

const baseURL = 'http://localhost/api/';

const withCredentials = false;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json'
};

const api = axios.create({
  baseURL,
  withCredentials,
  headers
});

export { api };
