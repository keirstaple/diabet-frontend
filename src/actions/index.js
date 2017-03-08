import axios from 'axios';
require('dotenv').config()

const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const FETCH_MEASUREMENTS = 'FETCH_MEASUREMENTS';
export const CREATE_MEASUREMENTS = 'CREATE_MEASUREMENTS';

const ROOT_URL = `https://www.diabet.io/api/glucose/`;
const settings = {
  responseType: 'json',
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    "authorization": "Basic a2VpcjpicmVha2FoYWJpdA==",
    "cache-control": "no-cache",
    "postman-token": "855c79a5-d54d-b200-0266-20cdc5b085ee"
  },
}

console.log(settings);

export function fetchMeasurements() {
  const request = axios.get(`${ROOT_URL}`, settings);

  console.log(request);
  return {
    type: FETCH_MEASUREMENTS,
    payload: request
  };
}

export function createMeasurements(props) {
  const request = axios.post(`${ROOT_URL}`, settings, props);

  return {
    type: CREATE_MEASUREMENTS,
    payload: request
  };
}
