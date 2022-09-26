import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState와 같은 역할
// state 하나를 slice라고 부름
let loginStatus = createSlice({
  name: "loginStatus",
  initialState: false,
  reducers: {
    onLogin(state) {
      console.log(state);
      return (state = true);
    },
    onLogout(state) {
      console.log(state);
      return (state = false);
    },
  },
});

// 함수 export하는 문법
export let { onLogin, onLogout } = loginStatus.actions;

export default configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
  },
});
