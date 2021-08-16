import React, { Component } from 'react'
import LeftMain from './LeftMain';
import MiddleMain from './MiddleMain';
import RightMain from './RightMain';
import {connect} from 'react-redux';
import {setAuthKey} from '../../redux/userAuthentication/action'
import {Redirect} from 'react-router-dom';
import Unauthorized from './Unauthorized';
import cookie from 'react-cookies';

import '../../ComponentCss/Main.css'

 class Main extends Component {

    constructor(props) {
        super(props);

        this.state={
            logout:false,
        }

        this.logout = this.logout.bind(this);

    }

    componentDidMount(){
        console.log("In componenDid mount main ",this.props);
    }

    logout=async ()=>{
        await cookie.remove('userId', { path: '/' })
        await cookie.remove('user',{ path: '/' })
       
        this.setState({
            logout:true,
        },()=>{console.log("I got called in logout")})
  
    }

    render() {

        if(this.state.logout==true){
            return <Redirect to="/logout"></Redirect>
        }

        console.log("props in render of main are ", this.props)
        console.log("cookies in render of main are", cookie.load('userId'));

        const authKey = cookie.load('userId');

        if(authKey==undefined || authKey==''){
            return <Unauthorized/>
        }

        return (

            <div class="main">

             <button id='logout-button' onClick={this.logout}>Logout</button>
                {/* <LeftMain/> */}
                <MiddleMain key={authKey}/>
                {/* <RightMain/> */}
                
            </div>
        )
    }

}


const mapStateToProps =(state)=>{ 
    console.log('state inside the Main ', state);
    return {
        authKey: cookie.load('userId')
    }
}

// no use of the below function
const mapDispatchToProps = (dispatch)=>{
    return {
        setAuthKey:(key)=>{
            dispatch(setAuthKey(key));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main)
