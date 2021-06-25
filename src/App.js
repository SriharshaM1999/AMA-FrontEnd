import './App.css';
import Sign from './Components/Sign/Sign'
import Header from './Components/Header'
import Main from './Components/Main/Main'
import {BrowserRouter as Router, Route, Switch,Redirect,Link} from 'react-router-dom';
import Unauthorized from './Components/Main/Unauthorized';
import MainPage from './Components/MainPage';
import cookie from 'react-cookies';
import React, {useEffect} from 'react'

function App() {



  const authKey = cookie.load('userId');

 




  return (



      
        <Router>

      
        <div className="App">


        {authKey == undefined && <Header flag = {false}></Header>}

        { authKey==undefined && <Redirect to='AMA'/>}
          
        {authKey!=undefined && <Header flag = {true}></Header>}         
         
              
        <Switch>
            <Route path="/main" exact component={()=>(<Main authkey/>)}></Route>
            <Route path="/AMA" exact component={()=>(<Unauthorized/>)}></Route>
            <Route path="/logout" exact component={()=>(<Unauthorized/>)}></Route>
            <Route path="/signup" exact component={()=>(<Sign type="Sign Up" username='true' forgotPassword='false'/>)}></Route>
            <Route path="/signin" exact component={()=>(<Sign type="Sign In" username='false'forgotPassword='true' />)}></Route>
            {/* <Route path="/Main-page" exact component={()=>(<MainPage/>)}></Route> */}
        </Switch>




        </div>

    </Router>


  );
}


// function mapStateToProps(state){ 
//   console.log("msp :" , state);
//   return {
//       authKey: state.authKey
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//       setAuthKey:(key)=>{
//           dispatch(setAuthKey(key));
//       }
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(App)

 export default App;
