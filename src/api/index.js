import axios from 'axios';
require('dotenv').config()

const authorization = process.env.REACT_APP_AUTHORIZATION;

export const FETCH_MEASUREMENTS = 'FETCH_MEASUREMENTS';
export const CREATE_MEASUREMENTS = 'CREATE_MEASUREMENTS';

const ROOT_URL = `https://www.diabet.io/api/glucose/`;
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.diabet.io/api/glucose/",
  "headers": {
    "content-type": "application/json",
    "authorization": `Basic ${authorization}`,
    "cache-control": "no-cache"
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
