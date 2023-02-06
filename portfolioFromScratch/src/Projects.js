import React, { Component } from 'react';
import PROJECTS from './data/project';

//props - to pass parent components to child components
//state is declared locally 
//props come from external source

class Project extends Component {
    render() {
        console.log('this.props',this.props);

        const { title, image, description, link } = this.props.project;

        //desctructuring syntax
        // const title = this.props.project.title;
        // const image = this.props.project.image;

        // ... description, link

        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} alt = 'profile' style={{ width: 200, height:120 }} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                    /* <div>{PROJECTS[0].title}</div>
                    <div>{PROJECTS[1].title}</div>
                    <div>{PROJECTS[2].title}</div> */
                    
                    //each chld in an array or iterator should have a unique "key" prop
                    //add key prop
                    PROJECTS.map(PROJECT => {
                        return (
                            // <div key={PROJECT.id}>{PROJECT.title}</div>
                            <Project key={PROJECT.id} project={PROJECT} />
                        );
                    })
                        
                    }
                </div>
            </div>
        )
    }
}

export default Projects;