import axios from 'axios';

export const promiseToGet = (url, init) => axios.get(url, init)
  .then(response => {
    console.log(response.data)
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return error;
  });

export const promiseToPost = (url, data, init) => axios.post(url, data, init)
  .then(function (response) {
    console.log('response', response);
    return response
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
