import { addProductString } from "../actionCreators/actionString";

const initialState = {
  product: {},
  // quantity: 0,
  // deliveryMethod: '',
  // subtotal: 0,
  // promo: ''
}

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case addProductString:
      return {...prevState, product: action.payload}
    default:
      return prevState
  }
}

export default cartReducer