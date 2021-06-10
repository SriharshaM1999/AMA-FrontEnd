import './App.css';
import Sign from './Components/Sign'

function App() {
  return (
    <div className="App">
          <div className="Components">
              <Sign type="Sign Up" username='true' forgotPassword='false'/>
          
              {/* <Sign type="Sign In" username='false'forgotPassword='true' /> */}
          </div>
    </div>
  );
}

export default App;
