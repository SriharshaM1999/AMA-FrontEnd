import './App.css';
import Sign from './Components/Sign/Sign'
import Header from './Components/Header'
import Main from './Components/Main/Main'
import {BrowserRouter as Router, Route, Switch,Redirect,Link} from 'react-router-dom';
import Unauthorized from './Components/Main/Unauthorized';
import MainPage from './Components/MainPage';
import cookie from 'react-cookies';
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import TaMain from './Components/Ta/MainPage'
import Describe from './Components/Ta/Describe'
import Landingpage from './Components/Landingpage'
import TaSignIn from './Components/Ta/TaSignIn';
import TaSignUp from './Components/Ta/TaSignUp'
import Dashboard from './Components/Ta/Dashboard';

function App(props) {


  const authKey = props.authKey;
  const taId = cookie.load('taId');

  useEffect(() => {
   
  }, [authKey])

 
  let flag = authKey==undefined?true:false;

  console.log("I got called->", flag);



  return (



      
        <Router>

      
        <div className="App">

        {authKey!=undefined && <Header flag = {flag} sign={true}></Header>}      
        {taId!=undefined && <Header flag = {flag} sign={false}></Header>}    
        {authKey == undefined && <Header flag = {flag} sign={true}></Header>}
        {taId == undefined && <Header flag = {flag} sign={false} ></Header>}
        

        { authKey==undefined && taId==undefined  && <Redirect to='AMA'/>}
        { taId!=undefined  && <Redirect to ='ta-main'/>}
        { authKey!=undefined  && <Redirect to ='main'/>}

       
         
              
        <Switch>
        <Route path='/ta-signup' exact component={()=><TaSignUp/>}></Route>
            <Route path='/ta-signin' exact component={()=><TaSignIn/>}></Route>
            <Route path="/main" exact component={()=>(<Main authkey/>)}></Route>
            <Route path="/AMA" exact component={()=>(<Landingpage/>)}></Route>
            <Route path="/logout" exact component={()=>(<Landingpage/>)}></Route>
            <Route path="/signup" exact component={()=>(<Sign type="Sign Up" username='true' forgotPassword='false'/>)}></Route>
            <Route path="/signin" exact component={()=>(<Sign type="Sign In" username='false'forgotPassword='true' />)}></Route>
            {/* <Route path="/Main-page" exact component={()=>(<MainPage/>)}></Route> */}
            <Route path="/ta-main" exact component={()=>(<TaMain/>)}></Route>
            <Route path="/ta-describe/:id" exact component={()=>(<Describe/>)}></Route>
            <Route path='/dashboard' exact component={()=>(<Dashboard/>)}></Route>
        </Switch>




        </div>

    </Router>


  );
}


function mapStateToProps(state){ 
  console.log("msp in app.js :" , state);
  return {
      authKey: cookie.load('userId'),
  }
}




 export default connect(mapStateToProps,null)(App)

 //export default App;
