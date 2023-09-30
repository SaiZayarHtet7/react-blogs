
import './App.css';
import { Link, NavLink, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <nav>
        <h1>My Blogs</h1>
        <ul>
        {/* navlink make link to be added as class = "active" but not in link */}
          <li><NavLink to="/">Home</NavLink></li>  
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

        </ul>
      </nav>
      {/* Dynamictically */}
      <Outlet/>
      
    </div>
  );
}

export default App;