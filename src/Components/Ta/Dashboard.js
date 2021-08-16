import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import cookie from 'react-cookies';
import '../../ComponentCss/ta/dashboard.css'

class Dashboard extends Component {


    constructor(props){
        super(props);
        this.state = {
            redirectToMain:false,
            currentTa:null,
            AllTas:[]
        }

        this.Main = this.Main.bind(this);
    }

    async componentDidMount(){

        const config = {
            headers: { Authorization: `Bearer ${cookie.load('taId')}` }
        };

        await axios.get('http://localhost:8000/api/v1/ta/dashboard', config)
        .then((response)=>{
            console.log(response)
            this.setState({
                AllTas:response.data.allTa,
                currentTa:response.data.ta
            })
        })
        .catch((error)=>{
            console.log(error);
        })


    }

     Main(){

        this.setState({
            redirectToMain:true
        })


    }







    render() {

        console.log("this.state", this.state);

        let main  = this.state.redirectToMain
        let currentTa = this.state.currentTa;

        console.log("currentTa", currentTa);

        if(main){
            return <Redirect to='/ta-main'></Redirect>
        }

        return (
            <div id='dashboard'>

                <div>
                     <button id='main-button' onClick={this.Main}>Go To Main</button>
                </div>

                <div id='dashboard-top'>

                    

                        <div>
                    <h4>Name</h4>
                     { currentTa&&  <h2>{currentTa.username}</h2> }
                        </div>

                        <div>
                    <h4>Questions Selected</h4>
                     { currentTa&&  <h2>{currentTa.QuestionsSelected.length}</h2> }
                        </div>

                        <div>
                    <h4>Questions Answered</h4>
                     { currentTa&&  <h2>{currentTa.QuestionsAnswered.length}</h2> }
                        </div>

                        <div>
                    <h4>Questions Escalated</h4>
                     { currentTa&&  <h2>{currentTa.QuestionsEscalated.length}</h2> }
                        </div>



                    

                </div>

                <div id ='dashboard-bottom'>
                
                {this.state.AllTas.map((ta,index)=>{
                        return(
                    <div>

                    <div><h2>{ta.username}</h2></div>
                    <div> <p>Question selected: {ta.QuestionsSelected.length}</p></div>
                    <div> <p>Question Answered: {ta.QuestionsAnswered.length}</p></div>
                    <div> <p>Question Escalated: {ta.QuestionsEscalated.length}</p></div>



                    </div>
                        )

                })}


</div>

            </div>
        )
    }
}

export default Dashboard
