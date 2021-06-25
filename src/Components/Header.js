import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/Header.css'
import cookie from 'react-cookies';
import Unauthorized from './Main/Unauthorized';



function Header(props) {

    console.log("props.in header are", props)



     const logout=()=>{
        cookie.remove('userId', { path: '/' })
        cookie.remove('user',{ path: '/' })
        setAuth('');
    }

    const authKey = cookie.load('userId');
    const username = cookie.load('user');

    const [Auth,setAuth] = useState(authKey);
   
    useEffect(()=>{
        console.log("IN header auth", Auth)
    },[Auth])


    if(props.flag){
        return(
            <div id="header">
            

            <div id="header-left">

               <h2>AMA</h2>
                <small>Ask me anything</small>

            </div>


            <div id="header-right">

            <p id="header-username">{username}</p>

            <Link to="/logout">
                <span onClick={logout}>Sign Out</span>
            </Link>


            </div>
            



        </div>
        )
    }
    else{

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
}


export default Header
