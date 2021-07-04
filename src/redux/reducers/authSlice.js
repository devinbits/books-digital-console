import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  status: false,
  userId: 0,
  token: undefined,
  error: undefined,
  message: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
    },
    loginResponse(state, { payload }) {
      state.isLoading = false;
      state.status = payload.success || false;
      state.token = payload.token;
      state.userId = payload.id;
      state.error = payload.error || true;
      state.message = payload.message;
    },
    logout(state) {
      state.status = false;
      state.token = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginResponse, logout } = authSlice.actions;

export default authSlice.reducer;
