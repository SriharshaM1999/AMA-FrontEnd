import React from 'react'
import '../ComponentCss/input.css'

function Input(props) {

    

    return (




        <input  onChange={(event)=>props.changeHandler(event.target.value)} 
        placeholder={props.placeholder} type={props.type} 
        name={props.name} value={props.value} />

        
    
    )
}




export default Input;
