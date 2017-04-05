import { promiseToGet, promiseToPost } from './utils';
require('dotenv').config()

const ROOT_URL = 'https://www.diabet.io/api/glucose/';
const ROOT_URL_MINI = `https://www.diabet.io/api/glucose/mini/?start=`;
const authorization = process.env.REACT_APP_AUTHORIZATION;

export const getMeasurements = (inputs = {}) => {
  console.log('inside getMeasurements');
  const { startDate, startTime, endDate, endTime} = inputs;
  console.log(inputs)
  let url;
  if(startDate === undefined || endDate === undefined) {
    url = `${ROOT_URL}`;
    console.log('api call', url);
  } else {
    url = `${ROOT_URL_MINI}${startDate}-${startTime}:00&end=${endDate}-${endTime}:00`;
    console.log('api call', url);
  }
  const init = {
    "async": true,
    "crossDomain": true,
    "headers": {
      "content-type": "application/json",
      "authorization": `Basic ${authorization}`,
      "cache-control": "no-cache"
    },
  };

  return promiseToGet(url, init);
}

export const postMeasurement = (inputs = {}) => {
  // const { measurement, time, date } = inputs;
  const url = `${ROOT_URL}`;
  console.log('inputs', inputs)
  const init = {
    "async": true,
    "crossDomain": true,
    "headers": {
      "content-type": "application/json",
      "authorization": `Basic ${authorization}`,
      "cache-control": "no-cache"
    },
  };

  return promiseToPost(url, init, inputs);
}

export const diabetApi = {
  getMeasurements,
  postMeasurement
}
