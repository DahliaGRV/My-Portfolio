import React from 'react';
import '../../styles/Resume.css';
import myResume from "../../assets/DahliaGResume.pdf"

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
            <li>Node.js</li>
            <li>Express.js</li>
            <li>NPM Packages</li>
            <li>MySQL/Sequelize</li>
            <li>Heroku Deployment</li>
            <li>Vercel Deployment</li>
            <li>GitHub Repositories</li>
            <li>Microsoft Suites</li>
        </ul>
        <h2 className='text-light'>Soft Skills</h2>
        <ul className='text-light'>
            <li>Problem Solving</li>
            <li>Effective Communication</li>
            <li>Team Player</li>
            <li>Attention to Detail</li>
            <li>Knowledge Seeker</li>
        </ul>
        <br/>
        <a href={myResume} target="_blank" rel="noreferrer" download="Dahlia-Graves-Resume"><h3 className='text-light'>Download a copy here</h3></a>
        </div>
        </div>
    );
}