import React from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/Header.css'
import cookie from 'react-cookies';
import Unauthorized from './Main/Unauthorized';

function Header() {

     const logout=()=>{
        cookie.remove('userId', { path: '/' })
    }

    return (
        <div id="header">
            

            <div id="header-left">

               <h2>AMA</h2>
                <small>Ask me anything</small>

            </div>


            <div id="header-right">

            <Link to="/signup">
                <span>Sign up</span>
            </Link>
            <Link to="/signin">
            <span>Sign In</span>
            </Link>

            <Link to="/logout">
                <span>Sign Out</span>
            </Link>


            </div>
            



        </div>
    )
}


export default Header
