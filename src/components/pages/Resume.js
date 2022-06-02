import React from 'react';
import '../../styles/Resume.css';
import myResume from "../../assets/DahliaGravesResume.pdf"

export default function Resume () {
    return(
        <div style={{marginLeft:"1%",marginTop:"1%"}}>
        <h1 className="text-light">Resume :</h1>
        <div className="container-sm" style={{display:"grid",margin:"auto", justifyContent:"center"}}>
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
        <br/>
        <a href={myResume} target="_blank" rel="noreferrer" download="Dahlia-Graves-Resume"><h3 className='text-light'>Download a copy here</h3></a>
        </div>
        </div>
    );
}