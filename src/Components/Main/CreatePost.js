import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../../ComponentCss/CreatePost.css';
import {createPost} from '../../redux/posts/action';
 class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state={
            post:'',
            tag:'other',
            authKey:props.authKey
        };
        this.keychangeHandler= this.keychangeHandler.bind(this);
        this.submitPost= this.submitPost.bind(this);
        this.tagChangeHandler= this.tagChangeHandler.bind(this);
    }

     
        tagChangeHandler(event){
            console.log(event.target.value);
                this.setState({
                    tag:event.target.value
                })
        }

      
        keychangeHandler(event){

                console.log("keyChangeHandler in CreatePost got Called", event.target.value)
                this.setState({
                    post:event.target.value
                })
        }

       async submitPost(){
            console.log("In submit post", this.state.authKey)
            if(this.state.post<=1) return ;
           await this.props.createPost(this.state.post, this.state.tag,this.state.authKey);
            
            this.setState({
                post:'',
                tag:'other'
            })
        }

        componentDidMount(){
            console.log("In createPost ::" , this.props);
        }

    render() {
        console.log("In createPost render ::" , this.props, this.state);
        return (
            <div id="create-post">

                
                <textarea placeholder="&nbsp; Post your Question..." rows= '4' cols='60' name='post'onChange={this.keychangeHandler}></textarea>

                <select id='tag' name='tag' onChange={this.tagChangeHandler}>
                    <option value='Maths'  >Maths</option>
                    <option value='Physics'>Physics</option>
                    <option value='Chemistry'>Chemistry</option>
                    <option value='Social'>Social</option>
                    <option value='Other' selected>Other</option>


                </select>

                <button id="create-post-button" onClick={this.submitPost}>Post</button>
            </div>
        )
    }
}

// Here no use of mapStateToProps
const mapStateToProps =(state)=>{
    console.log(state.setAuthReducer.authKey,"is this")
    return {
        authKey:state.setAuthReducer.authKey
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createPost:(data,tagname,authKey)=>{
            console.log("In createpst mapDispatchToProps", data, tagname, authKey);
            dispatch(createPost(data,tagname,authKey));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
