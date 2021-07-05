import React ,{Component} from 'react'
import AnswerSection from './AnswerSection'
import '../../ComponentCss/postDisplay.css'
import DisplayComment from './DisplayAnswers';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {deletePost} from '../../redux/posts/action'

class PostDisplay extends Component{
    
    constructor(props) {
        super(props);

        this.clickHandler= this.clickHandler.bind(this);

    }

     clickHandler(event){
        console.log(event.target.value);
        let value = event.target.value;
        let values= value.split('-')
        this.props.deletePost(values[1], values[0]);
    }
 

    render(){

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

                    {userLoggedIn==currentUser && <button value={tagname+'-'+postId} onClick={this.clickHandler} >Delete</button>}

                    </div>
            </div>


                <div className="post-display-middle">

                    <AnswerSection postId={this.props.post._id}/> 

                </div>

                <div className="post-display-bottom">

                    <DisplayComment answers={this.props.post.answer}/> 

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

