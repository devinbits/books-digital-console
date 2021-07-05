import Service from '../apiService';
import { authRequest, authResponse } from '../../redux/reducers/authSlice';

// Endpoints
const LOGIN = 'auth/login';
const REGISTER = 'auth/register';

// Async Actions
export const login = (email, password) => async (dispatch, getState) => {
  dispatch(authRequest());
  Service()
    .post(LOGIN, JSON.stringify({ email, password }))
    .then((res) => {
      dispatch(authResponse(res.data));
    })
    .catch((error) => dispatch(authResponse({ error })));
};

export const register =
  ({ name, email, password, phone }) =>
  async (dispatch, getState) => {
    dispatch(authRequest());
    Service()
      .post(REGISTER, {
        name,
        email,
        password,
        phone,
        nationalId: `${email.split('@')[0].slice(0, 10)}${phone}`,
      })
      .then((res) => {
        dispatch(authResponse(res.data));
      })
      .catch((error) => dispatch(authResponse({ error })));
  };
