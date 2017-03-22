import axios from 'axios';

export const promiseToGet = (url, init) => axios.get(url, init).then(response => {
  console.log('promiseToGet');
  return response.json().then(json => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    return json;
  });
});
