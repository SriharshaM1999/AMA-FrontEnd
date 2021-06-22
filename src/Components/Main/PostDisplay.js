import React from 'react'
import AnswerSection from './AnswerSection'
import '../../ComponentCss/postDisplay.css'
import DisplayComment from './DisplayAnswers';

function PostDisplay(props) {
    console.log("in post display the props are:" , props);
    return (
        <div className="post-display">

            <div className ="post-display-top">

                    <div className="post-display-top-left">
                 
                        {props.post.tagname}

                    </div>

                    <div className="post-display-top-middle">

                            <div className="post-display-top-middle-upper">

                                    <h5>{props.post.content} ?</h5>

                            </div>


                            <div className="post-display-top-middle-lower">
                                    
                                    <h6> a question by-{props.post.user.username}</h6>

                            </div>

                    </div>
            </div>


                <div className="post-display-middle">

                    <AnswerSection postId={props.post._id}/> 

                </div>

                <div className="post-display-bottom">

                    <DisplayComment answers={props.post.answer}/> 

                </div>
            
        </div>
    )
}

export default PostDisplay

