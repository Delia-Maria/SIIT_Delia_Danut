
import React from 'react';
import './Header.css';
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
           <h1> My Logo</h1>
           <nav>
               <Link to="./Home">
               <button>Home</button></Link>
               <Link to="./myCart">
               <button>My Cart</button></Link>
           </nav>
        </div>
    )

}
export default Header;

// 2 linkuri si un logo