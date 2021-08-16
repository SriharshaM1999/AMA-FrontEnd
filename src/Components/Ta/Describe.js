import React, { Component } from 'react';
import axios from 'axios';
import TaAnswerSection from './TaAnswerSection'
import '../../ComponentCss/ta/TaPostDisplay.css'
import DisplayComment from '../Main/DisplayAnswers';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {deletePost} from '../../redux/posts/action'
import {Redirect} from 'react-router-dom';

class Describe extends Component {

    constructor(props){
        super(props);

        this.state={
            post:null,
            escalate:false,
        };

        this.setEscalate= this.setEscalate.bind(this)
    }

    componentDidMount(){
        let urlPath = window.location.pathname.split('/');
        let  postId = urlPath[urlPath.length - 1];
        console.log(postId)
         let url = 'http://localhost:8000/api/v1//question/question'
         axios.get(url,
            {params:{id:postId}})
         
         .then(response=>{
             console.log(response);
             this.setState({
                 post:response.data.question
             })
         })
         .catch(error=>{
             console.log(error);
         })
        

    }

    setEscalate = async function(event){

        let urlPath = window.location.pathname.split('/');
        let  postId = urlPath[urlPath.length - 1];

        console.log("postid", postId);

        const bodyParameters={
            id:postId
            
        }

        const config = {
            headers: { Authorization: `Bearer ${cookie.load('taId')}` }
        };
        
        await axios.post('http://localhost:8000/api/v1/ta/escalateQuestion/',bodyParameters,config)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })

        

        this.setState({
            escalate:true
        });






    }




    render() {

        if(this.state.escalate==true){
            return <Redirect to='/ta-main'></Redirect>
        }

        console.log("this.setstate in describe", this.state);

        if(this.state.post===null){
            return <h1>Loading</h1>
        }
      
        return (
            <div className="post-display">

            <div className ="post-display-top">

                    <div className="post-display-top-left">
                 
                        {this.state.post.tagname}

                    </div>

                    <div className="post-display-top-middle">

                            <div className="post-display-top-middle-upper">

                                    <h5>{this.state.post.content} ?</h5>

                            </div>


                            <div className="post-display-top-middle-lower">
                                    
                                    <h6> a question by-{this.state.post.user.username}</h6>

                            </div>

                    </div>

                    
            </div>


                <div className="post-display-middle">

                    <TaAnswerSection post={this.state.post}/> 

                </div>

                <div className="post-display-bottom">

                    <DisplayComment answers={this.state.post.answer}/> 

                </div>

                <div>
                    <button onClick={this.setEscalate} >Escalate</button>
                </div>
            
        </div>
        )
        
    }
}

export default Describe
