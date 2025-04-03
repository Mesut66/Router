
import './App.css'
import { Routes, Route, Link , useMatch } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import User from './Components/User';
import NotFound from './Components/NotFound';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">React Router</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={useMatch({path:"" , end:true}) ? "nav-link active" : "nav-link"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={useMatch({path:"about" , end:true}) ? "nav-link active" : "nav-link"}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className={useMatch({path:"users" , end:true}) ? "nav-link active" : "nav-link"}>Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="users" element={<Users/>} >
              <Route path=":id" element={<User/>}/> 
            </Route>
            <Route path="*" element={<NotFound />} />         
          </Routes>
        </div>
    </>
  )
}

export default App


