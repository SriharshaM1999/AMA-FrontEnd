import React from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/Header.css'

function Header() {
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


            </div>
            



        </div>
    )
}

const styles = {
    image:{
        width:"20%",
        height:"100%"
    }
}

export default Header
