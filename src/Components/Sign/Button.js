import React from 'react';
import '../../ComponentCss/Button.css'

function Button(props) {
    console.log(props)
    
    return (
        <div id="sign-button">
            <button onClick={props.clickHandler}>{props.name}</button>
        </div>
    )
}

export default Button
