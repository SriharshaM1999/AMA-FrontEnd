import React from 'react'
import '../ComponentCss/postDisplay.css'

function PostDisplay(props) {
    return (
        <div className="post-display">

            <div className="post-display-left">
                {props.post.tagname}
            </div>

            <div className="post-display-middle">

                <div className="post-display-middle-upper">

                        <h5>{props.post.content} ?</h5>

                </div>


                <div className="post-display-middle-lower">
                        <h6> a question by-{props.post.user.username}</h6>
                </div>

            </div>
        </div>
    )
}

export default PostDisplay

