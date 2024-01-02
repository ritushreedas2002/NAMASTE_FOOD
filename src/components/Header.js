//import './Header.css';
import React,{lazy, useContext} from "react"
import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "./UserContext";

const Header = () => {
  const [button,setbutton]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  
  const Grocery=lazy(()=>{
    import("./Grocery");
  })
  
  const Click=()=>{ //On clicking the button quickly the whole coponent will be rendered again
    button ==="Login"?setbutton("Logout"):setbutton("Login");
  }

  return (
    <div className='flex justify-between shadow-md mb-3'>
      <div className='logo-container'>
        <img className="w-56 p-3 ml-9" src={LOGO_URL} alt="Food"/>
      </div>
      <div className='flex items-center'>
        <ul className="flex p-5 m-5">
          <li className="px-4 m-1">ONLINE STATUS:{onlineStatus?"✅":"🔴"}</li>
          <li className="px-4 m-1"><Link to="/">HOME</Link></li>
          <li className="px-4 m-1"><Link to="/about">ABOUT US</Link></li>
          <li className="px-4 m-1"><Link to="/contact">CONTACT US</Link></li>
          <li className="px-4 m-1"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 m-1">CART</li>
          <button className="px-4 m-1" onClick={Click}>{button}</button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
