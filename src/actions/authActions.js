import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../types";

const RegisterUser = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});