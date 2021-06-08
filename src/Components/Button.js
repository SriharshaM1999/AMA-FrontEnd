import React from 'react';
import '../ComponentCss/Button.css'

function Button(props) {
    console.log(props)
    return (
        <div>
            <button>{props.name}</button>
        </div>
    )
}

export default Button
