const initialState = {
  isActive: false,
}

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case "OPEN_FORM":
      return { ...state, isActive: state.isActive = true }
    case "CLOSE_FORM":
      return { ...state, isActive: state.isActive = false }
    default:
      return state
  }
}