import React from 'react';
import './Projects.css';
// import '../../../assets/work/';

export default function Projects(props){
    const project = props.project;

    return(
        <li className="project-container">
            <article className="project-card">
                <div className="project-image">
                    <img 
                    alt={project.Name} 
                    src={require('../../../assets/work' + project.Image)} 
                    />
                </div>
                {/* <p>Show more</p> */}
                <div className="project-information">
                    <p>{project.Name}</p>
                    <span class="project-type">{project.Type}</span>
                </div>
            </article>
        </li>
    );
};