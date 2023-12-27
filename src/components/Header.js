import './Header.css';
import React from "react"
import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [button,setbutton]=useState("Login");

  
  const Click=()=>{ //On clicking the button quickly the whole coponent will be rendered again
    button ==="Login"?setbutton("Logout"):setbutton("Login");
  }

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={LOGO_URL} alt="Food"/>
      </div>
      <div className='nav-items'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li>CART</li>
          <button className='log' onClick={Click}>{button}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
