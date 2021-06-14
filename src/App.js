import './App.css';
import Sign from './Components/Sign'
import Header from './Components/Header'
import Main from './Components/Main'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';







function App() {
  return (
    <Router>

    
    <div className="App">

      <Header/>  
          
    <Switch>
        <Route path="/main" exact component={()=>(<Main/>)}></Route>
        <Route path="/signup" exact component={()=>(<Sign type="Sign Up" username='true' forgotPassword='false'/>)}></Route>
        <Route path="/signin" exact component={()=>(<Sign type="Sign In" username='false'forgotPassword='true' />)}></Route>
    </Switch>
    </div>


 

    
    </Router>
  );
}

export default App;
