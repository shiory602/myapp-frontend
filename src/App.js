import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './components/Home';
import Login from './components/Login';
import Resister from './components/Resister';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/resister'>
          <Resister />
        </Route>
      </Switch>
      <Footer footer="copyright SHIORI-Suzuki." />
    </BrowserRouter>
  );
}

export default App;
