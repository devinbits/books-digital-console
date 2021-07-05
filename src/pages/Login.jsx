import React from 'react';
import Button from 'components/widgets/Button';
import TextInput from 'components/widgets/TextInput';
import {
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { login } from 'api/auth';
import { logout } from 'redux/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { validateLoginForm } from 'utils/utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Copyright from 'components/common/Copyright';
import getStyles from 'styles/authStyles';

const useStyles = makeStyles((theme) => getStyles(theme));

const showError = (value, error) => value.length && error;

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, token, isLoading, message, error } = useSelector(
    (state) => state.authReducer
  );

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [FormData, setFormData] = React.useState({});

  React.useEffect(() => {
    if (status && token) history.replace('/home');
  }, [history, status, token]);

  React.useEffect(() => {
    if (isSubmitted && !isLoading)
      setTimeout(() => setIsSubmitted(false), 3000);
  }, [isSubmitted, isLoading]);

  const { email = '', password = '' } = FormData;
  const formError = validateLoginForm(FormData);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextInput
            value={email}
            error={showError(email, formError.email)}
            helperText="Please enter valid email."
            onChange={(e) =>
              setFormData((data) => ({ ...data, email: e.target.value }))
            }
            inputProps={{ maxLength: 45 }}
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <TextInput
            value={password}
            error={showError(password, formError.password)}
            helperText="Please enter password."
            onChange={(e) =>
              setFormData((data) => ({ ...data, password: e.target.value }))
            }
            inputProps={{ maxLength: 10 }}
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            text="Sign In"
            loading={isLoading}
            className={classes.submit}
            disabled={Object.keys(formError).length !== 0}
            onClick={() => {
              dispatch(login(FormData.email, FormData.password));
              setIsSubmitted(true);
            }}
          />
          <Grid container justify="center">
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
      <Snackbar
        open={isSubmitted && message && !isLoading}
        onClose={() => dispatch(logout())}
      >
        <Alert severity={error ? 'error' : 'success'}>{message}</Alert>
      </Snackbar>
    </Container>
  );
}
