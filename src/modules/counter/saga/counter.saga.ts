import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

import { CounterState } from "../models/counter.model";
import { increment } from "../slice/counter.slice";

function* incrementSaga(action: PayloadAction<CounterState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

export function* counterSaga() {
  yield takeEvery(increment.type, incrementSaga);
}
