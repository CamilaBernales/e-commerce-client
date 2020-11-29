import{
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS
} from "../types"

const getProducts =(products) =>({
    type:GET_PRODUCTS_SUCCESS,
    payload:products
})

export {getProducts}