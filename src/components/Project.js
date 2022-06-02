import React from 'react';

// const styles =[

// ]

const projects = [
    {
        title: "FotoFoto",
        imgLink: "/FF-page1.JPG",
        imgAlt: "FotoFoto",
        deployedLink: "https://fotofotolibrary.herokuapp.com/",
        gitHubLink: "https://github.com/DahliaGRV/FOTOFOTO",
        description: "A full-stack image library and robust photo-editing platform that aims to be a fun and simple way for users to upload their own photos and add a touch of personalization"
    }, {
        title: "Inspirational Jeopardy",
        imgLink:"/InspJep-page1.JPG",
        imgAlt: "Inspirational Jeopardy",
        deployedLink: "https://dahliagrv.github.io/inspirational-jeopardy/",
        gitHubLink: "https://github.com/DahliaGRV/inspirational-jeopardy",
        description: "A platform that is designed to make learning trivia style questions both inspiring and engaging."
    }, {
        title: "WorkDay Scheduler",
        imgLink:"/WorkDay.JPG",
        imgAlt: "WorkDay Scheduler",
        deployedLink: "https://dahliagrv.github.io/Work-Day-Schedule/",
        gitHubLink: "https://github.com/DahliaGRV/Work-Day-Schedule",
        description: "A practical application for scheduling a workday that using dynamic technology to tell the user the time based on color codes."
    }
]

export default function Project() {
    return (
        <div>
        <div className="bg-dark text-white"style={{margin:"auto",marginTop:"2%"}}>
            <h3 style={{marginLeft:"1%"}}>My Work :</h3>
            <div className="container"style={{display:"grid",gridTemplateColumn: "repeat(3,[col-start])"}}>
            {projects.map(({title, imgLink, imgAlt, deployedLink, gitHubLink, description}) => {
            return (
                <div class="card" key={title} >
                    <img src={imgLink} alt={imgAlt} class="card-img-top"></img>
                    <div class="card-body" style={{opacity:"0.5"}}>
                        <h5 class="card-title text-light">{title}</h5>
                        <p class="card-text text-light">{description}</p>
                        <p></p>
                    </div>
                    <div class="card-body">
                        <a href={deployedLink}>Visit it here!</a>
                        <br />
                        <a href={gitHubLink}>See the Repo!</a>
                    </div>
                </div>
            )
        })}
        </div>
        </div> 
        </div>
    )
}
