import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../types";

const initialState = {
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
}
