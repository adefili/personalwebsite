import React from 'react';
import ProjectItem from './ProjectItem';
import text from './../json/project_content';
import { Spring} from 'react-spring/renderprops';

class Project extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: "en"
        }
    }

    changeText(e){
        this.setState({language: e});
    }

    render() {   
        const items = [];
        for (var idx = 0; idx < text.projects.length; idx++) {
            items.push(
                <ProjectItem name = {text.projects[idx].name[this.state.language]}
                            description = {text.projects[idx].description[this.state.language]}
                            tags = {text.projects[idx].tags}
                            image = {text.projects[idx].image}
                            date = {text.projects[idx].date}/>)
        }

        return (
            <div className="paper">
                <div className="jumboTitle" >{text.title[this.state.language]}</div>   
                <div className="Project">
                    {items}
                </div>
            </div>
        );
    }
}

export default Project;