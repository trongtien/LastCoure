import axiosService from '../config/axiosService'
const url = process.env.REACT_APP_API_PRODUCT

let fetchListProduct = () => {
  return axiosService.get(`${process.env.REACT_APP_API_ENDPOINT}/${url}`)
}

export {
  fetchListProduct
}