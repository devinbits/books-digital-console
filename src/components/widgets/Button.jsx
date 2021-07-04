import React from 'react';
import { Button as MtButton, CircularProgress } from '@material-ui/core';

const Button = ({ text, loading, ...rest }) => {
  return (
    <MtButton fullWidth variant="contained" color="primary" {...rest}>
      {loading ? (
        <CircularProgress size={24} variant="indeterminate" color="inherit" />
      ) : (
        text
      )}
    </MtButton>
  );
};

export default Button;
