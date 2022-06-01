import React from 'react';

// export default function Project () {
//     const [projects, setProjects] = useState([{
//         imgs:[],
//         description:"",
//         title:""
//     },
// {
//     imgs:[],
//     description:"",
//     title:""
// },{
//     imgs:[],
//     description:"",
//     title:""
// }
// ])
// return (
//     <div className="Project">
//         {projects.map(projectObj=><Card image={projectObj.imgs} description={projectObj.description} title= {projectObj.title}/>)}
//     </div>
// )
// }
const projects = [
    {
        title: "",
        imgLink:"",
        imgAlt:"",
        deployedLink:"",
        gitHubLink:"",
    },{
        title: "",
        imgLink:"",
        imgAlt:"",
        deployedLink:"",
        gitHubLink:"",
    },{
        title: "",
        imgLink:"",
        imgAlt:"",
        deployedLink:"",
        gitHubLink:"",
    }
]

export default function Project() {
    return (
        projects.map(({title, imgLink, imgAlt, deployedLink, gitHubLink })=>{
            return (
                <div key={title} className="each project">
                    <p>{title}</p>
                    <img src={imgLink} alt={imgAlt}></img>
                    <a href={deployedLink}>Visit it here!</a>
                    <a href={gitHubLink}>See the Repo!</a>
                </div>
            )
        })
    )
}