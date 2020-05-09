
const initialState = {
  product: []
}

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case 'ALL_PRODUCT':
      return { ...state, product: state.product }
    default:
      return state
  }
}