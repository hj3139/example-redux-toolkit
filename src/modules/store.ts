import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { counterSlice, counterSaga } from "./counter";

const sagaMiddleware = createSagaMiddleware();

function* saga() {
  yield all([fork(counterSaga)]);
}

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
