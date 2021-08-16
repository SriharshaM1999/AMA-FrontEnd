import React, { Component } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

 class TaAnswerSection extends Component {

    constructor(props) {
        super(props)
    
        this.state={
            comment:'',
            user:cookie.load('userId'),
            dashboard:false
        }

    
        this.changeComment=this.changeComment.bind(this);
        this.setAnswer = this.setAnswer.bind(this);

    }

     changeComment(event){

            this.setState({
                comment:event.target.value,
            },()=>{console.log(this.state)})

    }

    
    clickHandler=(event)=>{

        console.log(event);
        const comment = this.state.comment;
        const postId  = this.props.post._id
        console.log('postId in answersection is', postId)
        const authKey = this.state.authKey;

        console.log("click Handler in answer section " ,this.state);

       // this.props.createComment(comment,postId,authKey);

      // this.setAnswer();
    }

    setAnswer = async ()=>{

        console.log("I got called");

        const bodyParameters={
            content:this.state.comment,
            questionId:this.props.post._id
            
        }

        const config = {
            headers: { Authorization: `Bearer ${cookie.load('taId')}` }
        };
        
        
        await axios.post('http://localhost:8000/api/v1/ta/solution/',bodyParameters,config)
        .then((response)=>{
            console.log(response);
            this.setState({
                dashboard:true
            })
        })
        .catch((err)=>{
            console.log(err);
        })


        
    }

    


    render() {

        if(this.state.dashboard==true){
            return <Redirect to='/dashboard' />
        }

        console.log("In Ta Answer section ", this.props)
        
        return (
            <div className="comment">

               <textarea id={this.props.post._id} onChange={this.changeComment} placeholder="Post your answer..." rows="4" cols="50"  className="comment-input" type="text" name="comment"></textarea>
               <button value={this.props.post._id} className="comment-button" onClick={this.setAnswer}>Submit...!</button>
                
            </div>
        )
    }
}

export default TaAnswerSection
