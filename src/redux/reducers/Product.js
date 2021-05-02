const key = "product";
export const Types = {
  GET_PRODUCTS: `${key}/GET_PRODUCTS`,
  GET_PRODUCTS_OK: `${key}/COLLECT_PARCEL_OK`,
  SET_LOADING: `${key}/SET_LOADING`,
  POST_PRODUCT: `${key}/POST_PRODUCT`,
  PUT_PRODUCT: `${key}/PUT_PRODUCT`,
  DELETE_PRODUCT: `${key}/DELETE_PRODUCT`
};

const INITIAL_STATE = {
  products: [],
  loading: false
};

export function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: []
      };
    case Types.GET_PRODUCTS_OK:
      return {
        ...state,
        products: action.payload
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case Types.POST_PRODUCT:
      return {
        ...state
      };
    case Types.PUT_PRODUCT:
      return {
        ...state
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state
      };
    default:
      return state;
  }
}
