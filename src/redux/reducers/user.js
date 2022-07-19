import { FULFILLED, getUserString, logoutString, PENDING, REJECTED } from "../actionCreators/actionString"

const initialState = {
  userData: {},
  isLoading: false,
  isError: null,
  err: null
}

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
      case getUserString + PENDING:
          return { ...prevState, isLoading: true, isError: null, err: null }

      case getUserString + FULFILLED:
          return {  ...prevState, userData: action.payload.data.data[0], isLoading: false, isError: false}

      case getUserString + REJECTED:
          return { ...prevState, isLoading: false, isError: true, err: action.payload.data }
      
      case logoutString:
          return initialState
          
      default:
          return prevState;
  }
}

export default userReducer