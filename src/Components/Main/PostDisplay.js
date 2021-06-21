import React from 'react'
import '../../ComponentCss/postDisplay.css'

function PostDisplay(props) {
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
            
        </div>
    )
}

export default PostDisplay

