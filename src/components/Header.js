import React from 'react';
import {Link} from "react-router-dom"

const styles ={
  liStyle: {
    color: 'inherit',
    textDecoration: 'inherit',
    justifyContent: 'space-between',
  }
}

function Header() {
  return (
    <nav class= "navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
    <h1 className="text-light"> Dahlia Graves</h1>
    <ul className="nav nav-tabs ">
      <li className="nav-item" style={styles.liStyle}>
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item" style={styles.liStyle}>
      <Link to="/about">About</Link>
      </li>
      <li className="nav-item" style={styles.liStyle}>
      <Link to="/blog">Portfolio</Link>
      </li>
      <li className="nav-item" style={styles.liStyle}>
      <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-item" style={styles.liStyle}>
      <Link to="/resume">Resume</Link>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Header;