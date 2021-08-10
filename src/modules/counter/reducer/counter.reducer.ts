import { Draft } from "@reduxjs/toolkit";

import { CounterState } from "../models/counter.model";

export const counterReducer = {
  increment: {
    reducer: (state: Draft<CounterState>) => {
      state.value++;
    },
    prepare: (value: CounterState) => ({ payload: value }),
  },
  decrement: (state: Draft<CounterState>) => {
    state.value--;
  },
};
