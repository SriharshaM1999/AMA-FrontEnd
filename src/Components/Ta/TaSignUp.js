import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';

class TaSignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:'',
             redirectToMain:false,
             redirectToSignIn:false
        }

        this.signIn = this.signIn.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.signUp  = this.signUp.bind(this);
        this.nameHandler= this.nameHandler.bind(this);

    }

    emailHandler = function(event){
        console.log("i got called")
            this.setState({email:event.target.value})
    }

    passwordHandler = function(event){
        console.log("i got called")
        this.setState({password: event.target.value})
    }

    signIn = function(event){
        this.setState({
            redirectToSignIn:true
        })
    }

    signUp= async function(){
        console.log("i got called")
        console.log("this.state", this.state)

        
        const bodyParameters={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
            
        }
        
        await axios.post('http://localhost:8000/api/v1/ta/create-account',bodyParameters)
        .then((response)=>{
            console.log("response in ta sign up Handler ",response);
            // console.log("response.data.data.token in tasignIn.js is", response.data.data.token);
            // cookie.save('taId', response.data.data.token , { path: '/' })
            // cookie.save('taname',response.data.data.username);
            
        })
        .catch((err)=>{
            console.log(err);
        })

        this.setState({
            redirectToSignIn:true
        })


    }

    nameHandler= function(event){

        this.setState({name: event.target.value})

    }

    render() {

       

        if(this.state.redirectToSignIn==true){
            return <Redirect to='/ta-signin'></Redirect>
        }

        return (
            <div id='ta-sign-in'>

                <div id='ta-sign-in-element'>
                    <input type='text' name ='name' onChange={this.nameHandler} placeholder='Enter your name'/>
                    <input type='email' onChange={this.emailHandler} name='email' placeholder = 'enter your email'></input>
                    <input type='password' onChange={this.passwordHandler} name='password' placeholder ='enter your password'></input>
                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Sign In</button>

                </div>
                
            </div>
        )
    }
}

export default TaSignUp
