import { combineReducers } from "redux";
import { Reducer as Initial } from "./Initial";
import { Reducer as Product } from "./Product";

const createRootReducer = () =>
  combineReducers({
    Initial,
    Product
  });

export default createRootReducer;
