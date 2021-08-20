import React from 'react';
import Layout from '../components/Layout'
import '../styles/App.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ForgotPassword() {
  const classes = useStyles();
  return (
    <Layout>
      <div className='App'>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Your email..."
              multiline
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary">
            Reset Password
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword;