import React from 'react';
import {Link} from "react-router-dom"
import '../styles/Header.css'

function Header() {
  return (
    <nav className= "navbar navbar-dark bg-dark" >
      <div className="container-fluid big-img">
    <h1 className="text-light myName"> Dahlia Graves</h1>
    {/* <ul className="nav"> */}
      {/* <p className="nav-item " >
        <Link to="/">Home</Link>
      </p> */}
      <p className="nav-item " >
      <Link to="/about">About</Link>
      </p>
      <p className="nav-item " >
      <Link to="/blog">Portfolio</Link>
      </p>
      <p className="nav-item " >
      <Link to="/contact">Contact</Link>
      </p>
      <p className="nav-item" >
      <Link to="/resume">Resume</Link>
      </p>
    {/* </ul> */}
    </div>
    </nav>
  );
}

export default Header;