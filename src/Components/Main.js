import React, { Component } from 'react'
import LeftMain from './LeftMain';
import MiddleMain from './MiddleMain';
import {connect} from 'react-redux';
import {setAuthKey} from '../redux/users/action'
 

import '../ComponentCss/Main.css'

 class Main extends Component {

    componentDidMount(){
        console.log("In componenDid mount main "+this.props);
    }

    render() {
        console.log("props in render ", this.props)
        return (
            <div class="main">

                <LeftMain/>
                <LeftMain/>
                <LeftMain/>

                
            </div>
        )
    }

}


const mapStateToProps =(state)=>{ 
    console.log('state inside the Main ', state);
    return {
        authKey: state.authKey
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setAuthKey:(key)=>{
            dispatch(setAuthKey(key));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main)
