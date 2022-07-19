import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import cartReducer from "./cart";

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  cart: cartReducer,
})

export default reducers