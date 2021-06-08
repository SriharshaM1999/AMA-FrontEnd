import React from 'react'
import Input from './Input'
import {FcLock} from 'react-icons/fc'
import '../ComponentCss/Sign.css'
import Button from './Button'

function SignUp(props) {
    return (
        <div class="sign-up">

            <FcLock style={styles.icon}/>
             <h4>{props.type}</h4>
            {props.username==='true' && <Input type='text' placeholder='User Name  *' name='username'/>}
             <Input type='email' placeholder='Email Address  *' name='email'/>
             <Input type='password' placeholder='Password *' name='password'/>
              <Button name='SIGN-UP'/>
              <div id="bottom-elements">
                   {props.forgotPassword==='true' && <h5>Forget Password</h5> }
                    <h5>Have Account</h5>
              </div>
        </div>
    )
}

const styles={
    icon:{
        fontSize:'4vw',
        backgroundolor:'pink',
        borderRadius:'50%',
        color:'white'
    }
}

export default SignUp
