import axiosService from '../config/axiosService'
import lib from '../config/lib'
const url = lib.REACT_APP_API_PRODUCT

let fetchListProduct = () => {
  return axiosService.getApiService('https://5e8d97e522d8cd0016a7973a.mockapi.io/api/products')
}

export {
  fetchListProduct
}