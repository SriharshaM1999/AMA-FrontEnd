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

    componentDidMount(){
        console.log("In componenDid mount main ",this.props);
    }

    render() {
        console.log("props in render of main are ", this.props)
        console.log("cookies in render of main are", cookie.load('userId'));

        const authKey = cookie.load('userId');

        if(authKey==undefined || authKey==''){
            return <Unauthorized/>
        }

        return (

            <div class="main">


                <LeftMain/>
                <MiddleMain key={authKey}/>
                <RightMain/>
                
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
