import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  laoding: false,
  status: false,
  userId: 0,
  token: undefined,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.laoding = true;
    },
    loginResponse(state, { payload }) {
      state.laoding = false;
      state.status = payload.success || false;
      state.token = payload.token;
      state.userId = payload.id;
      state.error = payload.error;
    },
    logout(state) {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginResponse, logout } = authSlice.actions;

export default authSlice.reducer;
