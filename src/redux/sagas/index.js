import { all } from "@redux-saga/core/effects";
import Product from "./Product";

export default function* rootSaga() {
  return yield all([Product()]);
}
