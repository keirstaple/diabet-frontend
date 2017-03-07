import axios from 'axios';
require('dotenv').config()

const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

console.log(username, password);

export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = `https://${username}:${password}@www.diabet.io/api/glucose/`;

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}
