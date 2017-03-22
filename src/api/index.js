import promiseToGet from './utils';

require('dotenv').config()

const ROOT_URL = `https://www.diabet.io/api/glucose/`;
const authorization = process.env.REACT_APP_AUTHORIZATION;

export const getMeasurements = () => {
  console.log('inside getMeasurements');

  const url = `${ROOT_URL}`;
  const init = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.diabet.io/api/glucose/",
    "headers": {
      "content-type": "application/json",
      "authorization": `Basic ${authorization}`,
      "cache-control": "no-cache"
    },
  };

  return promiseToGet(url, init);
}

export const diabetApi = {
  getMeasurements
}
