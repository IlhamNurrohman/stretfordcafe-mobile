import { doLogin } from "../../modules/auth";
import { loginString, logoutString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: doLogin(body)
})

export const logoutAction = () => ({
    type: logoutString,
})