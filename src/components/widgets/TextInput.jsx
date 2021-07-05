import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      size="small"
      {...props}
    />
  );
};

export default TextInput;
