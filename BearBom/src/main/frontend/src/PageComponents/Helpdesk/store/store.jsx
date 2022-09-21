import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState와 같은 역할
// state 하나를 slice라고 부름
let tab = createSlice({
  name: "tab",
  initialState: 0,
  reducers: {
    onChange(state, action) {
      return (state = action.payload);
    },
  },
});

// 함수 export하는 문법
export let { onChange } = tab.actions;

let test = createSlice({
  name: "tab",
  initialState: 0,
});

export default configureStore({
  reducer: {
    tab: tab.reducer,
    test: test.reducer,
  },
});
