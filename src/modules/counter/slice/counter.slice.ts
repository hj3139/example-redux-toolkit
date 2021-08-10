import { createSlice } from "@reduxjs/toolkit";

import { CounterState } from "../models/counter.model";
import { counterReducer } from "../reducer/counter.reducer";

const initialState = { value: 0 } as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: counterReducer,
});

export const { increment, decrement } = counterSlice.actions;
