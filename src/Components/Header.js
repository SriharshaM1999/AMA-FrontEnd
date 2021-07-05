import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/Header.css'
import cookie from 'react-cookies';
import Unauthorized from './Main/Unauthorized';
import {connect} from 'react-redux';


class Header extends Component{

    constructor(props) {
        super(props);

         this.state={
             flag:props.flag,
             authKey:props.authKey
         }
             
         


    }



    logout=()=>{
        cookie.remove('userId', { path: '/' })
        cookie.remove('user',{ path: '/' })
        this.setState({
            flag:!this.state.flag,
        },()=>{console.log("I got called in logout", this.state.authKey, this.state.flag)})
  
    }

   

    render(){
    const authKey = this.props.authKey
    const username = cookie.load('user');

    
   
   console.log("props is header are", this.props)


    if(username){
        return(


            <div id="header">
            

            <div id="header-left">

               <h2>AMA</h2>
                <small>Ask me anything</small>

            </div>


            <div id="header-right">

            <p id="header-username">{username}</p>

            <Link to="/logout">
                <span onClick={this.logout}>Sign Out</span>
            </Link>


            </div>
            



        </div>
        )
    }
    else{

    return (
        <div id="header">
            

            <div id="header-left">

               <h2>AMA</h2>
                <small>Ask me anything</small>

            </div>


            <div id="header-right">

            <Link to="/signup">
                <span>Sign up</span>
            </Link>
            <Link to="/signin">
            <span>Sign In</span>
            </Link>


            </div>
            



        </div>
    )

    }
}
}

function mapStateToProps(state){ 
    console.log("msp in app.js :" , state);
    return {
        authKey: cookie.load('userId'),
    }
  }
  
  
  
  
   export default connect(mapStateToProps,null)(Header)