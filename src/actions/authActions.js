import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "../types";

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
const logOutSucess = () =>({
    type: LOGOUT_SUCCESS
})

export { loginSuccess, logOutSucess };
