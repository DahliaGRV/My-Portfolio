import React from 'react';
import '../styles/Footer.css';
import github from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-64.png";
// import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <div className="footer position-relative">
         <a className="position-absolute bottom-1 end-50 mt-1" href="https://github.com/DahliaGRV" rel="noreferrer" target="_blank"><img src={github} alt="..."></img></a>
        <a className="position-absolute bottom-1 start-50 " href="https://www.linkedin.com/in/dahlia-graves/" rel="noreferrer" target="_blank"><img src={linkedin} alt="..."></img></a>
        </div>

    );
    
}


