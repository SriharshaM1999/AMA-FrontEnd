import React,{useEffect} from 'react';
import '../../ComponentCss/Unauthorized.css';
import cookie from 'react-cookies';

function Unauthorized() {

    useEffect(() =>{   
         cookie.remove('userId', { path: '/' })

        },
            [])

    return (
        <div id="unauthorized">
            <p> Please Login to Continue </p>
        </div>
    )
}

export default Unauthorized
