import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';
import '../../ComponentCss/ta/tasign.css';


class TaSignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             redirectToMain:false,
             redirectToSignUp:false
        }

        this.signIn = this.signIn.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.signUp = this.signUp.bind(this);

    }

    emailHandler = function(event){
        console.log("i got called")
            this.setState({email:event.target.value})
    }

    signUp = function(){
        this.setState({
            redirectToSignUp:true
        })
    }

    passwordHandler = function(event){
        console.log("i got called")
        this.setState({password: event.target.value})
    }

    signIn= async function(){
        console.log("i got called")
        console.log("this.state", this.state)

        
        const bodyParameters={
            email:this.state.email,
            password:this.state.password
            
        }
        
        await axios.post('http://localhost:8000/api/v1/ta/create-session',bodyParameters)
        .then((response)=>{
            console.log("response in ta sign In Handler ",response);
            console.log("response.data.data.token in tasignIn.js is", response.data.data.token);
            cookie.save('taId', response.data.data.token , { path: '/' })
            cookie.save('taname',response.data.data.username);
            this.setState({
                redirectToMain:true
            })
        })
        .catch((err)=>{
            console.log(err);
        })


    }

    render() {

        if(this.state.redirectToMain== true){
            return <Redirect to='/ta-main'></Redirect>
        }
        if(this.state.redirectToSignUp== true){
            return <Redirect to='/ta-signup'></Redirect>
        }
        if(this.state.redirectToSignIn== true){
            return <Redirect to='/ta-signin'></Redirect>
        }


        return (
            <div id='ta-sign-in'>

                <div id='ta-sign-in-element'>
                    <input type='email' onChange={this.emailHandler} name='email' placeholder='enter your mail'></input>
                    <input type='password' onChange={this.passwordHandler} name='password' placeholder = 'Enter your password'></input>
                    <button onClick={this.signIn}>Sign In</button>
                    <button onClick={this.signUp}>Dont Have Account</button>
                </div>
                
            </div>
        )
    }
}
export default TaSignIn
