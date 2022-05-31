import React from 'react';
import '../../styles/Resume.css';
import myResume from "../../assets/DahliaGravesResume.pdf"

export default function Resume () {
    return(
        <div className="position-relative">
        <a href={myResume} target="_blank" rel="noreferrer" download="Dahlia-Graves-Resume"><h1 className='text-light'>Resume</h1></a>
        
        <div className="container-sm">
        <h2 className='text-light'>Hard Skills</h2>
        <ul className='text-light'>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>GitHub Repositories</li>
            <li>Microsoft Suites</li>
        </ul>
        <h2 className='text-light'>Soft Skills</h2>
        <ul className='text-light'>
            <li>Problem Solving</li>
            <li>Effective Communication</li>
            <li>Team Player</li>
            <li>Attention to Detail</li>
        </ul>
        </div>
        </div>
    );
}