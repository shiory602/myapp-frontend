import React from 'react';
import Layout from '../components/Layout'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../styles/App.css'

function Login() {
  return (
    <Layout>
      <div className='App'>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </Layout>
  )
}

export default Login;