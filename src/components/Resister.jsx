import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

function Resister() {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  )
}

export default Resister;