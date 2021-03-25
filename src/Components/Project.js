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

        var tags = "REACT ";
        var description = "CIAO";
        var name = "Project Name";

        

        for (var idx = 0; idx < text.projects.length; idx++) {
            var name = text.projects[idx].name[this.state.language];
            var description = text.projects[idx].description[this.state.language];
            var tags = text.projects[idx].tags;
            var image = text.projects[idx].image;
            var date = text.projects[idx].date;

            items.push(
                <ProjectItem name = {name}
                            description = {description}
                            tags = {tags}
                            image = {image}
                            date = {date}/>)
        }

        return (
            <div className="paper">
                <div className="jumboTitle" >Projects</div>   
                <div className="Project">
                    {items}
                </div>
            </div>
        );
    }
}

export default Project;