import { getProfile } from "../../modules/auth";
import { getUserString } from "./actionString";

export const getUserAction = (token) => ({
  type: getUserString,
  payload: getProfile(token)
})