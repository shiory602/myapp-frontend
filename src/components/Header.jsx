import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.scss'
import Logo from '../images/pngegg.png'

function Header() {
  return (
    <div className='Header'>
      <div className='Header-inner'>
        <Link to='/'>
          <img src={Logo} height='100px' alt='logo' />
        </Link>
        <div className='Header-menu'>
          <ul>
            <li><Link to='/resister' color="primary">Register</Link></li>
            <li><Link to='/login' color="primary">Log In</Link></li>
            <li><Link to='/forgotPassword' color="primary">Forgot password</Link></li>
            <li><Link to='/logout' color="primary">Log out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;