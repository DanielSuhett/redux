import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
const persistConfig = {
  key: "key",
  storage,
  blacklist: ["notification", "Notification"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

export let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
