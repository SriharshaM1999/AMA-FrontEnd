import React, { Component } from 'react';
import '../../ComponentCss/comment.css';
import {connect} from 'react-redux';
import {createComment} from '../../redux/comments/action';

class AnswerSection extends Component {

    constructor(props) {
        super(props);

        this.state={
            comment:'',
            postId:props.postId,
            authKey:props.authKey
        };

        this.changeComment=this.changeComment.bind(this);

    }

     changeComment(event){

            this.setState({
                comment:event.target.value,
            },()=>{console.log(this.state)})

    }

   

    clickHandler=()=>{
        console.log(this.state.comment);
        const comment = this.state.comment;
        const postId = this.state.postId;
        const authKey = this.state.authKey;

        console.log("click Handler in comment " ,this.state);

        this.props.createComment(comment,postId,authKey);
    }

    render() {
        console.log("this comment belongs to post Id ", this.state.postId)
        return (
            <div className="comment">

               <textarea onChange={this.changeComment} placeholder="Post your answer..." rows="4" cols="50"  className="comment-input" type="text" name="comment"></textarea>
               <button className="comment-button" onClick={this.clickHandler}>Submit...!</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
            authKey:state.setAuthReducer.authKey
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createComment:(content, postId, authKey)=>{
                dispatch(createComment(content, postId, authKey));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerSection)
