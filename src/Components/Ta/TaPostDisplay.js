import React ,{Component} from 'react'
import AnswerSection from '../Main/AnswerSection'
import '../../ComponentCss/ta/TaPostDisplay.css'
import DisplayComment from '../Main/DisplayAnswers';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {deletePost} from '../../redux/posts/action'
import Describe from './Describe'
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class PostDisplay extends Component{
    
    constructor(props) {
        super(props);

        this.state={
            expand:false
        }

        this.clickHandler= this.clickHandler.bind(this);

    }

     async clickHandler(event){

        const postId = this.props.post._id;
        console.log(">>",postId)

        const bodyParameters={
            id:postId
            
        }

        const config = {
            headers: { Authorization: `Bearer ${cookie.load('taId')}` }
        };
        
        //        await axios.post('http://localhost:8000/api/v1/ta/solution/',bodyParameters,config)

        await axios.post('http://localhost:8000/api/v1/ta/add/',bodyParameters,config)
        .then((response)=>{
            console.logg("In add question")
            console.log(response);
        })
        .catch((err)=>{
            console.log("the err",err);
        })

        

        this.setState({
            expand:true
        });

        console.log("I got called");

     }
 

    render(){
        console.log(this.props);
        console.log(this.state.expand);
        if(this.state.expand==true){
        const postId = this.props.post._id;
        console.log("postId is "+ postId);
        let url ="/ta-describe/"+postId;
            console.log("url is", url)
        return <Redirect to={url}></Redirect>
        }
            const userLoggedIn = cookie.load('user');
            const currentUser = this.props.post.user.username;
            const postId = this.props.post._id;
            const tagname= this.props.post.tagname
        
            
        
            console.log("in post display the props are:" , this.props);

        

    return (
        <div className="post-display">

            <div className ="post-display-top">

                    <div className="post-display-top-left">
                 
                        {this.props.post.tagname}

                    </div>

                    <div className="post-display-top-middle">

                            <div className="post-display-top-middle-upper">

                                    <h5>{this.props.post.content} ?</h5>

                            </div>


                            <div className="post-display-top-middle-lower">
                                    
                                    <h6> a question by-{this.props.post.user.username}</h6>

                            </div>

                    </div>

                    <div className="post-display-top-right">

                   <button  onClick={this.clickHandler} >Answer </button>

                    </div>
            </div>


                

               
            
        </div>
        )

    }    
}

const mapStateToProps=(state)=>{

    return {
        user : cookie.load('userId')
    }

}

const mapDispatchToProps=(dispatch)=>{
    return {
        deletePost: (postId,tagname, authKey=cookie.load('userId'))=>{
            dispatch(deletePost(postId,tagname, authKey));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay)

