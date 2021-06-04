import React from 'react';
import { main_logo } from '../../images/Image';
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={main_logo} />
			<div className="navbar_item">
			<Link className="links" to="/">Home</Link>
			<Link className="links" to ="/movies">Movies</Link>
			</div>
    </div>
  );
};

export default Navbar;
