import './App.css';
import Sign from './Components/Sign'

function App() {
  return (
    <div className="App">
    
          <Sign type="Sign Up" username='true' forgotPassword='false'/>
          {/* <Sign type="Sign In" username='false'forgotPassword='true' /> */}
  </div>
  );
}

export default App;
