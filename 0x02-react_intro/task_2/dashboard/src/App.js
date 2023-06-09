import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" width="150px"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label>Email: <input type="email"></input></label>
        <label>Password: <input type="password"></input></label>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p><i>Copyright {getFullYear()} - {getFooterCopy(true)}</i></p>
      </div>
    </div>
  );
}


export default App;
