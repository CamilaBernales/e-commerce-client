import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from "../types";

const initialState = {
  user: {},
  isLogged: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLogged: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("user");
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    default:
      return state;
  }
}
