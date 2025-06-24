import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  let darkMode=props.darkMode;
  let navstyle={}
  if(darkMode===true){
    navstyle={
      color:"white",
      backgroundColor:"black"
    }
  }
  else{
    navstyle={
      color:"black",
      backgroundColor:"#a2a8a5"
    }
  }

  return (
    <nav className="navbar navbar-expand-lg  " style={navstyle} >
  <div className="container-fluid my--3">
    <Link className="navbar-brand" to="/"  style={navstyle} >{props.title}</Link>

    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={navstyle} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={navstyle} >About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
