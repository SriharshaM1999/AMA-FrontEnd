import React,{Component} from 'react'

import UserName from './UserName'

import '../../ComponentCss/LeftMain.css'

import {connect} from 'react-redux';
import {fetching} from '../../redux/users/action';


 class LeftMain extends Component {

    constructor(props){
        console.log("In left main the props are ", props);
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        this.props.fetching();
        console.log("component did mount in left Main : ", this.props.users)
    }

    render() {
        console.log("In render function in left Main ", this.state.users);
        return (



            <div className ='left-main'>

                    <div id="user-name-heading">

                        <div>Active Users</div>
             
                        <div> Contribution</div>

                    </div>

                    {this.props.users.map((user,index,users)=>{
                        return<UserName user={user} key={index}/>
                        
                    })}

             
            </div>
        )
    }
}





const mapStateToProps =(state)=>{ 
    // console.log('state inside the left main ', state);
    console.log('state inside the left main ', state.userReducer.users);
    return {
        users: state.userReducer.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetching:(key)=>{
            dispatch(fetching());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LeftMain);