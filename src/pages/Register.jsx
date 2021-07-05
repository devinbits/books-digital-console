import React from 'react';
import Button from 'components/widgets/Button';
import TextInput from 'components/widgets/TextInput';
import {
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
import Copyright from 'components/common/Copyright';

import { makeStyles } from '@material-ui/core/styles';
import { register } from 'api/auth';
import { logout } from 'redux/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { validateRegisterForm } from 'utils/utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getStyles from 'styles/authStyles';

const useStyles = makeStyles((theme) => getStyles(theme));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, token, isLoading, message, error } = useSelector(
    (state) => state.authReducer
  );

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [FormData, setFormData] = React.useState({});

  const { name = '', email = '', password = '', phone = '' } = FormData;

  const showError = (value, error) => value.length && error;

  React.useEffect(() => {
    if (status && token) history.replace('/home');
  }, [history, status, token]);

  React.useEffect(() => {
    if (isSubmitted && !isLoading)
      setTimeout(() => setIsSubmitted(false), 3000);
  }, [isSubmitted, isLoading]);

  const formError = validateRegisterForm(FormData);

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
            value={name}
            error={showError(name, formError.name)}
            helperText="Please enter valid name."
            onChange={(e) =>
              setFormData((data) => ({ ...data, name: e.target.value }))
            }
            inputProps={{ maxLength: 25 }}
            id="name"
            label="Full Name"
            autoComplete="name"
            autoFocus
          />
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
          />
          <TextInput
            value={phone}
            error={showError(phone, formError.phone)}
            helperText="Please enter valid phone number."
            onChange={(e) =>
              setFormData((data) => ({ ...data, phone: e.target.value }))
            }
            inputProps={{ maxLength: 10 }}
            id="phone"
            label="Phone Number"
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
          <Button
            text="Get Started"
            loading={isLoading}
            className={classes.submit}
            disabled={Object.keys(formError).length !== 0}
            onClick={() => {
              dispatch(register(FormData));
              setIsSubmitted(true);
            }}
          />
          <Grid container justify="center">
            <Grid item>
              <Link href="#/login" variant="body2">
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        open={isSubmitted && message && !isLoading}
        onClose={() => dispatch(logout())}
      >
        <Alert severity={error ? 'error' : 'success'}>{message}</Alert>
      </Snackbar>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
}
