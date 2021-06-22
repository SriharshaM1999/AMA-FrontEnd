import React from 'react'
import '../../ComponentCss/input.css'

function Input(props) {

    

    return (


<div>
        <label for={props.name} >{props.name}</label><br/>
        <input  onChange={(event)=>props.changeHandler(event.target.value)} 
        placeholder={props.placeholder} type={props.type} 
        name={props.name} value={props.value} />
</div>
        
    
    )
}




export default Input;
