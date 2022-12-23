import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () =>{

  return (
    <>
    <ul>
        <li>
        <Link className="brand-logo darken-1" to="/">  Home </Link>
        </li>
        <li>
        <Link className="brand-logo darken-1" to="/Contact">  About </Link>
        </li>
        
    </ul>
   
    </>
      );
    }
    
    export default Navbar;