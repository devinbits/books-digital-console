import React from 'react';
import Button from 'components/widgets/Button';
import {
  TextField,
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
import { validateEmail } from 'utils/utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/devinbits/books-digital-express#readme"
      >
        Digital Express
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, token, isLoading, message, error } = useSelector(
    (state) => state.authReducer
  );

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [FormData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  React.useEffect(() => {
    if (status && token) history.replace('/home');
  }, [history, status, token]);

  React.useEffect(() => {
    if (isSubmitted && !isLoading)
      setTimeout(() => setIsSubmitted(false), 3000);
  }, [isSubmitted, isLoading]);

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
          <TextField
            value={FormData.email}
            error={
              FormData.email?.length !== 0 && !validateEmail(FormData.email)
            }
            helperText="Please enter valid email."
            onChange={(e) =>
              setFormData((data) => ({ ...data, email: e.target.value }))
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            // autoComplete="email"
            autoFocus
          />
          <TextField
            value={FormData.password}
            error={
              FormData.password?.length !== 0 && FormData.password.length < 6
            }
            helperText="Please enter password."
            onChange={(e) =>
              setFormData((data) => ({ ...data, password: e.target.value }))
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
            disabled={
              !validateEmail(FormData.email) || FormData.password.length < 6
            }
            onClick={() => {
              dispatch(login(FormData.email, FormData.password));
              setIsSubmitted(true);
            }}
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
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
