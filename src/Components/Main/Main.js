import React, { Component } from 'react'
import LeftMain from './LeftMain';
import MiddleMain from './MiddleMain';
import RightMain from './RightMain';
import {connect} from 'react-redux';
import {setAuthKey} from '../../redux/userAuthentication/action'
import {Redirect} from 'react-router-dom';

import '../../ComponentCss/Main.css'

 class Main extends Component {

    componentDidMount(){
        console.log("In componenDid mount main ",this.props);
    }

    render() {
        console.log("props in render of main are ", this.props)


        return (
            <div class="main">


                <LeftMain/>
                <MiddleMain key={this.props.authKey}/>
                <RightMain/>
                
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

// no use of the below function
const mapDispatchToProps = (dispatch)=>{
    return {
        setAuthKey:(key)=>{
            dispatch(setAuthKey(key));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main)
