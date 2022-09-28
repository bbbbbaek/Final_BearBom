import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState와 같은 역할
// state 하나를 slice라고 부름
let loginStatus = createSlice({
  name: "loginStatus",
  initialState: false,
  reducers: {
    onLogin(state) {
      return (state = true);
    },
    onLogout(state) {
      return (state = false);
    },
  },
});

let refreshUpdates = createSlice({
  name: "refreshUpdates",
  initialState: 0,
  reducers: {
    onIncrease(state) {
      return state + 1;
    },
  },
});

// 함수 export하는 문법
export let { onLogin, onLogout } = loginStatus.actions;
export let { onIncrease } = refreshUpdates.actions;

export default configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    refreshUpdates: refreshUpdates.reducer,
  },
});
