import React, { Component } from 'react';
import '../ComponentCss/LandingPage.css'
import {Redirect} from 'react-router-dom';
import { thisTypeAnnotation } from '@babel/types';
import TaSignIn from './Ta/TaSignIn';

class Landingpage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             redirectToStudent:false,
             redirectToTa:false

        }

        this.student = this.student.bind(this);
        this.ta = this.ta.bind(this);
    }

    student=()=>{
        this.setState({
            redirectToStudent:true
        })
    }

    ta=()=>{
        this.setState({
            redirectToTa:true
        })
    }


    

    render() {

        let student = this.state.redirectToStudent;
        let ta = this.state.redirectToTa;

        if(student){
                return <Redirect to='/ta-signin'></Redirect>
        }
        if(ta){
                return <Redirect to='/signup'></Redirect>
        }



        return (
            <div id='landing-page'>

                <button onClick ={this.student}>Sign In as TA</button>
                <button onClick={this.ta}>Sign In as Student</button>
                
            </div>
        )
    }
}

export default Landingpage
