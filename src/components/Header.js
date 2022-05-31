import React from 'react';
import {Link} from "react-router-dom"
import '../styles/Header.css'

function Header() {
  return (
    <nav className= "navbar navbar-dark bg-dark" >
      <div className="container-fluid big-img">
    <h1 className="text-light myName"> Dahlia Graves</h1>
      <p className="nav-item " >
      <Link to="/">About</Link>
      </p>
      <p className="nav-item " >
      <Link to="/portfolio">Portfolio</Link>
      </p>
      <p className="nav-item " >
      <Link to="/contact">Contact</Link>
      </p>
      <p className="nav-item" >
      <Link to="/resume">Resume</Link>
      </p>
    </div>
    </nav>
  );
}

export default Header;