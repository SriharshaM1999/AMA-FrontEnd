import React from 'react';
import '../ComponentCss/UserName.css'

function UserName(props) {
    return (
        <div className='user-name'>
            <div>{props.user.username}</div>
            <div>{props.user.noOfQuestions}</div>
            <div>{props.user.noOfAnswers}</div>

        </div>
    )
}

export default UserName
