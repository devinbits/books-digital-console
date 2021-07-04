import Service from '../apiService';
import { loginRequest, loginResponse } from '../../redux/reducers/authSlice';

// Endpoints
const LOGIN = 'auth/login';
const REGISTER = 'auth/register';

// Async Actions
export const login = (email, password) => async (dispatch, getState) => {
  dispatch(loginRequest());
  Service()
    .post(LOGIN, JSON.stringify({ email, password }))
    .then((res) => {
      dispatch(loginResponse(res.data));
    })
    .catch((error) => dispatch(loginResponse({ error })));
};

export const register =
  (name, email, password, phone, nationalId) => async (dispatch, getState) => {
    dispatch(loginRequest());
    Service()
      .post(REGISTER, { name, email, password, phone, nationalId })
      .then((res) => {
        dispatch(loginResponse(res.data));
      })
      .catch((error) => dispatch(loginResponse({ error })));
  };
