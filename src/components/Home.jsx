import React from 'react';
import { Link } from 'react-router-dom';
import catPic from '../images/top.jpg';

function Home() {
  return (

    <div className="App">
      <header className='App-header'>
        <Link to='/login' color="primary">Log In</Link>
        <Link to='/resister' color="primary">Register</Link>
      </header>
      <main>
        <img src={catPic} className='App-image' alt='cat' />
      </main>
    </div>
  )
}

export default Home;