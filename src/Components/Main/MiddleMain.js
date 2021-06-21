import React, { Component } from 'react';
import PostDisplay from './PostDisplay';
import CreatePost from './CreatePost';
import {connect} from 'react-redux';
import {fetching} from '../../redux/posts/action';

 class MiddleMain extends Component {



    constructor(props){
        super(props);

        this.state={
            loading:true,
            posts:[],
            error:''
        }

        console.log("constructor in middle main props are", this.props)
    }

    componentDidMount(){
        this.props.fetching();
        console.log("in middle main",this.props);
        this.setState({
            loading:false,
            posts:this.props.posts
        },()=>{console.log(this.state.posts)})
    }


    render() {
        console.log("In middle main render the props are", this.props)
        return (
            <div id="middle-main">

                <CreatePost/>

                {this.props.posts.map((post,index)=>{
                    return <PostDisplay post={post} key={index}/> 
                })}

                {/* {this.props.posts.map((post,index)=>{
                    return <PostDisplay post={post} key={index}/> 
                })} */}

                
                
            </div>
        )
    }
}

function mapStateToProps(store){ 
    console.log(" store inside the middle main is" , store);
    return {
        posts: store.postReducer.posts
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetching:()=>{
            console.log("mapDispatchtoProps inside middle main got called")
            dispatch(fetching());
        }
    }
}

 

export default connect(mapStateToProps,mapDispatchToProps)(MiddleMain)
