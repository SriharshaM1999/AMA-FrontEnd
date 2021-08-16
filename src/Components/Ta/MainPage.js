import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetching} from '../../redux/posts/action';
import  TaPostDisplay  from './TaPostDisplay';
import '../../ComponentCss/ta/tamain.css';
import {Redirect,Link} from 'react-router-dom'
import cookie from 'react-cookies'
 class MainPage extends Component {

    constructor(props) {
        super(props)

        this.state={
            nothing:0,
            logout:false,
            dashboard:false,
        }

        this.updateLogout = this.updateLogout.bind(this)
        this.updateDashboard = this.updateDashboard.bind(this)

    }

    updateDashboard = ()=>{
        this.setState({
            dashboard:true
        })
    }

    componentDidMount(){
        this.props.fetching();
    }

    updateNothing=()=>{
        this.setState({nothing:1})
    }

    updateLogout = ()=>{
       
 
         cookie.remove('taId',{path:'/'});
         cookie.remove('taname',{path:'/'})

         this.setState({
            logout:true,
        },()=>{console.log("I got called in ta logout")})
       
   }
    
   
    

    render() {

        const taId = cookie.load('taId');
        const dashboard = this.state.dashboard
        console.log("in taId ta", taId)

        var flag =0;
        this.props.posts.map((post)=>{
            console.log(":::", post.status);
                if(post.status==1){
                        flag=1;
                        
                }
        });

        console.log("Finally i can say", flag);
      

        if(taId==undefined){
            return <Redirect to="/logout"></Redirect>
        }

        if(dashboard==true){
            return <Redirect to="/dashboard"></Redirect>
        }



        if(this.state.flag==0){
            console.log("nothing to show")
            return (<div>  <button id='ta-dashboard-button' onClick={this.updateDashboard}>Go To Dashboard</button><br/>  <button id='ta-logout-button' onClick={this.updateLogout}>Logout</button><div id="nothing">NOthing to Show</div></div>)
        }

       


        let posts = this.props.posts;


        console.log("this.props are",posts);
        
        
        return (
            <div id='ta-main'>

                <button id='ta-dashboard-button' onClick={this.updateDashboard}>Go To Dashboard</button><br/>

                <button id='ta-logout-button' onClick={this.updateLogout}>Logout</button>

                {this.props.post==null || this.props.post==undefined || flag==1 && <p>Nothing to show</p> }

               <h2 id="ta-temp"> The questions posted till now by the students are ::</h2>
                {this.props.posts.map((post,index)=>{
                    if(!post.status || post.status=='0')
                      return <TaPostDisplay post={post} key={index}/> 
                })}
               
            </div>
        )
    }
}

function mapStateToProps(store){ 
    console.log(" store inside the ta main is" , store);
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






export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
