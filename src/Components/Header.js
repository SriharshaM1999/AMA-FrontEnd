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



    logout=async ()=>{
        await cookie.remove('userId', { path: '/' })
        await cookie.remove('user',{ path: '/' })
       
        this.setState({
            flag:!this.state.flag,
        },()=>{console.log("I got called in logout", this.state.authKey, this.state.flag)})
  
    }

    taLogout =async ()=>{
         await cookie.remove('taId',{path:'/'});
         await cookie.remove('taname',{path:'/'})
         this.setState({
            flag:!this.state.flag,
        },()=>{console.log("I got called in logout", this.state.authKey, this.state.flag)})

    }

    

   

    render(){



    const authKey = this.props.authKey;
    const username = cookie.load('user');
    const taname = cookie.load('taname');
    
   
   console.log("props is header are", this.props)


 


            return(
            <div id="header">
            

            <div id="header-left">

               <h2>Coding Ninjas</h2>
                <small>Doubt Resolving</small>

            </div>

        </div>

            )
        

    }

}

function mapStateToProps(state){ 
    console.log("msp in app.js :" , state);
    return {
        authKey: cookie.load('userId'),
    }
  }
  
  
  
  
   export default connect(mapStateToProps,null)(Header)