import { FULFILLED, loginString, logoutString, PENDING, REJECTED } from "../actionCreators/actionString";

const initialState = {
    userInfo: null,
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false
}

const authReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return { ...prevState, err: null, isLoading: true, isSuccess: null }

        case loginString + FULFILLED:
            return { ...prevState, isLoading: false, userInfo: action.payload.data.data, isSuccess: true, isLoggedIn: true }

        case loginString + REJECTED:
            return { ...prevState, err: action.payload.response.data, isLoading: false, isSuccess: false }
        
        case logoutString:
            return initialState
            
        default:
            return prevState;
    }
}

export default authReducer