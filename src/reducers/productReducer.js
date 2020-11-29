import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from "../types";

const initialState = {
  products: [],
  productDeleted: null,
  productEdited: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.type,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products: {},
      };
    default:
      return state;
  }
}
