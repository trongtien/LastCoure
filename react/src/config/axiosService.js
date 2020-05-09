import axios from 'axios'

let intance = axios.create();
intance.interceptors.response.use(handleSuccess, handleError)
let handleSuccess = (response) => {
  return response
}

let handleError = (error) => {
  return Promise.reject(error)
}

let getApiService = (url) => {
  return intance.get(url);
}

export {
  handleSuccess,
  handleError,
  getApiService
}