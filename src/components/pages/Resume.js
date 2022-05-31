import React from 'react';
import '../../styles/Resume.css';
import myResume from "../../assets/DahliaGravesResume.pdf"

export default function Resume () {
    return(
        <div className="container-sm">
            <a href={myResume} target="_blank" rel="noreferrer" download="Dahlia-Graves-Resume"><h1 className='text-light'>Resume</h1></a>
        <h2 className='text-light'>Hard Skills</h2>
        <h2 className='text-light'>Soft Skills</h2>
        </div>
    );
}