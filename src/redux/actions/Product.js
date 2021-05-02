import { Types as Product } from "../reducers/Product";

export function products() {
  return {
    type: Product.GET_PRODUCTS,
    payload: {}
  };
}

export function productLoading(loading) {
  return {
    type: Product.SET_LOADING,
    payload: loading
  };
}

export function productsOk(data) {
  return {
    type: Product.GET_PRODUCTS_OK,
    payload: data
  };
}

export function createProduct(payload) {
  return {
    type: Product.POST_PRODUCT,
    payload
  };
}

export function updateProduct(payload, id) {
  return {
    type: Product.PUT_PRODUCT,
    payload,
    id
  };
}

export function deleteProduct(id) {
  return {
    type: Product.DELETE_PRODUCT,
    id
  };
}
