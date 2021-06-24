import React from 'react'
import '../../ComponentCss/Answer.css'

 
function Answer(props) {

    console.log("In answer js ", props);
    return (
        <div className="answer">
            
            <small>{props.answer.user.username}</small>
            <small>{props.answer.content}</small>
        </div>
    )
}

export default Answer


