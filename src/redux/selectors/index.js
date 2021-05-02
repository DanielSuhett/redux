import { createSelector } from "reselect";

const selectRaw = (state) => {
  return state.Product;
};

export const products = createSelector([selectRaw], (state) => state.products);

export const loading = createSelector([selectRaw], (state) => state.loading);
