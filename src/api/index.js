import {promiseToGet} from './utils';
require('dotenv').config()

const ROOT_URL = 'https://www.diabet.io/api/glucose/';
const ROOT_URL_MINI = `https://www.diabet.io/api/glucose/mini/?start=`;
const authorization = process.env.REACT_APP_AUTHORIZATION;

export const getMeasurements = (startDate, startTime, endDate, endTime) => {
  console.log('inside getMeasurements');
  let url;
  if(startDate === undefined || endDate === undefined) {
    url = `${ROOT_URL}`;
    console.log('api call', url);
  } else {
    url = `${ROOT_URL_MINI}${startDate}-${startTime}&end=${endDate}-${endTime}`;
    console.log('api call', url);
  }
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
