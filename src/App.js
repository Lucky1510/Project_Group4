import './App.css';
import {NavLink, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img src="/flight1.jpg" alt= "noImg" width="100%" height="150px"/>
      <div>
        <ul className="header" style= {{textAlign:'right'}}>
          <li><NavLink to= "/signin">Login</NavLink></li>
          <li><NavLink to= "/signup">Sign Up</NavLink></li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
