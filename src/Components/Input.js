import React from 'react'
import '../ComponentCss/input.css'

function Input(props) {


    return (

        <input placeholder={props.placeholder} type={props.type} name={props.name} />
    
    )
}

export default Input;
