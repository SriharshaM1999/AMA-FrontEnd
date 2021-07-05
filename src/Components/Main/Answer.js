import React,{Component} from 'react'
import '../../ComponentCss/Answer.css'
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {deleteComment} from '../../redux/comments/action';

 
class Answer extends Component {

    constructor(props){
        super(props);
        this.clickHandler= this.clickHandler.bind(this);
    }

    clickHandler(event){
        console.log(event.target.value);
        const postId = this.props.answer.question;
        this.props.deleteComment(event.target.value,postId);


        
    }

    render() {

        const userLoggedIn = cookie.load('user');
        const currentUser = this.props.answer.user.username;

        console.log("In answer js ", this.props);
        return (
            <div className="answer">

                {userLoggedIn == currentUser && <button onClick={this.clickHandler} value={this.props.answer._id}>X</button>}
                
                <small>{this.props.answer.user.username}</small>
                <small>{this.props.answer.content}</small>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        authKey:cookie.load('userId')
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteComment:(commentId, postId, authKey=cookie.load('userId'))=>{
                dispatch(deleteComment(commentId, postId, authKey))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Answer);


