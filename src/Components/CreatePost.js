import React, { Component } from 'react'
import '../ComponentCss/CreatePost.css';

 class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state={
            post:''
        };
        this.keychangeHandler= this.keychangeHandler.bind(this);
        this.submitPost= this.submitPost.bind(this);
    }

      
        keychangeHandler(event){

                console.log("keyChangeHandler in CreatePost got Called", event.target.value)
                this.setState({
                    post:event.target.value
                })
        }

        submitPost(){
            console.log("I got clicked")
        }



    render() {
        return (
            <div id="create-post">
                
                <textarea rows= '8' cols='60' name='post'onChange={this.keychangeHandler}></textarea>

                <button id="create-post-button" onClick={this.submitPost}>Post</button>
            </div>
        )
    }
}

export default CreatePost
