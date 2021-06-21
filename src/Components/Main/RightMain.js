import React, { Component } from 'react';
import Tag from './Tags'
import {connect} from 'react-redux';
import {fetchingTags} from '../../redux/tags/action';
import '../../ComponentCss/RightMain.css'
class RightMain extends Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            tags:[]
        };
    }

    componentDidMount(){
            this.props.fetchingTags();

    
    }
    render() {
        console.log("IN right main render :", this.props)
        return (
            <div className="right-main">
                <p>Tags</p>
                {this.props.tags.map((tag,index)=>{
                    console.log("I got called........!");
                     return  <Tag tag={tag} key ={index} />
                })}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{ 
    console.log('state inside the RightMain ', state);
    return {
        tags: state.tagReducer.tags
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        fetchingTags:()=>{
            dispatch(fetchingTags());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RightMain)

