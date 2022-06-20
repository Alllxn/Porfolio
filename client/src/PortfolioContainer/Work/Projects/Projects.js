import React from 'react';
import './Projects.css';
import glamorous, { withTheme } from 'glamorous';

export default function Projects(props){
    const project = props.project;

    const ProjectType = glamorous.span({
        backgroundColor : project.Color,
        color: "white"
    });

    const ProjectDescription = glamorous.span({
        ':after': {
            backgroundColor : project.Color
        }
    });
    
    const Tech = glamorous.span({
        background : project.Color
    });

    const Techs = project.Tecnologies.map(function(object,i){
        return(
            <Tech className="project-tech" key={i}>{object}</Tech>
        );
    });

    return(
        <li className="project-container">
            <article className="project-card">
                <ProjectType className="project-type">
                    {/* <b> */}
                        {project.Type}
                    {/* </b> */}
                </ProjectType>
                <div className="project-image">
                    <img 
                    alt={project.Name} 
                    src={require('../../../assets/work' + project.Image)} 
                    />
                </div>
                <div className="project-information">
                    <p className="project-name"><b>{project.Name}</b></p>
                    {/* <projectDescription /> */}
                    <ProjectDescription className="project-description">{project.Description}</ProjectDescription>
                    <div className="techs-wrap">
                        {Techs}
                    </div>
                </div>
            </article>
        </li>
    );
};
