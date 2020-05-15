
const initialState = {
  product: []
}

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case "FETCH_PRODUCT":
      return { ...state, product: state.product }
    case 'FETCH_PRODUCT_SUCESS':
      return
    case 'FECT_PRODUCT_FAILE':
      return
    default:
      return state
  }
}