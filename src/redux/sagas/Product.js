import { takeLatest, call, put } from "redux-saga/effects";
import { Types as Product } from "../reducers/Product";
import { apiProduction } from "../../services/api";
import * as productActions from "../actions/Product";
import { createStandaloneToast } from "@chakra-ui/react";

function* getProducts() {
  const toast = createStandaloneToast();
  yield put(productActions.productLoading(true));

  try {
    const options = {
      method: "GET",
      url: "/products"
    };

    const products = yield call(apiProduction, options);

    yield put(productActions.productLoading(false));

    yield put(productActions.productsOk(products.data));
  } catch (error) {
    yield put(productActions.productLoading(false));

    toast({
      title: "Erro",
      description: "Não foi possível buscar os produtos",
      status: "error",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
    console.log(error);
  }
}

function* createProduct(action) {
  const toast = createStandaloneToast();

  yield put(productActions.productLoading(true));
  console.log(action);
  try {
    const options = {
      method: "POST",
      url: "/",
      data: action.payload
    };

    yield call(apiProduction, options);

    yield put(productActions.productLoading(false));

    yield put(productActions.products());

    toast({
      title: "Criado",
      description: "Produto criado com sucesso",
      status: "success",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
  } catch (error) {
    yield put(productActions.productLoading(false));
    toast({
      title: "Erro",
      description: "Não foi possível criar o produto",
      status: "error",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
    console.log(error);
  }
}

function* updateProduct(action) {
  const toast = createStandaloneToast();

  yield put(productActions.productLoading(true));
  console.log(action);
  try {
    const options = {
      method: "PUT",
      url: `/${action.payload.id}`,
      data: action.payload
    };

    yield call(apiProduction, options);

    yield put(productActions.productLoading(false));

    yield put(productActions.products());

    toast({
      title: "Atualizado",
      description: "Produto atualizado com sucesso",
      status: "success",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
  } catch (error) {
    yield put(productActions.productLoading(false));
    toast({
      title: "Erro",
      description: "Não foi possível atualizar o produto",
      status: "error",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
    console.log(error);
  }
}

function* deleteProduct(action) {
  const toast = createStandaloneToast();

  yield put(productActions.productLoading(true));

  console.log(action);
  try {
    const options = {
      method: "DELETE",
      url: `/${action.payload.id}`
    };

    yield call(apiProduction, options);

    yield put(productActions.productLoading(false));

    yield put(productActions.products());

    toast({
      title: "Deletado",
      description: "Produto deletado com sucesso",
      status: "success",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
  } catch (error) {
    yield put(productActions.productLoading(false));
    toast({
      title: "Erro",
      description: "Não foi possível deletar o produto",
      status: "error",
      duration: 9000,
      position: "top-right",
      isClosable: true
    });
    console.log(error);
  }
}

export default function* ProductSaga() {
  yield takeLatest(Product.GET_PRODUCTS, getProducts);
  yield takeLatest(Product.POST_PRODUCT, createProduct);
  yield takeLatest(Product.PUT_PRODUCT, updateProduct);
  yield takeLatest(Product.DELETE_PRODUCT, deleteProduct);
}
