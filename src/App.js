import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Index';
import Resister from './pages/Resister';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Logout from './pages/Logout';


// function whenLoginIsClick() {
//   fetch('www.google.com/')
//     .then(theThingThatCameBack = (param) => {
//       return param;
//     )}
// }

// function whenLogoutIsClick() {
  
// }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/resister'>
          <Resister />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/forgotPassword'>
          <ForgotPassword />
        </Route>
        <Route exact path='/Logout'>
          <Logout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
