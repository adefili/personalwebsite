import React from 'react';
import ProjectItem from './ProjectItem';
import { Spring} from 'react-spring/renderprops';

class Project extends React.Component{
    constructor(props){
        super(props);
    }

    render() {   
        const items = [];

        var tags = "REACT ";
        var description = "CIAO";
        var name = "Project Name";

        for (var idx = 0; idx < 4; idx++) {

            description = "Progetto fantastico con tanti dettagli " + description + description
            name = "Project Name project " + name;
            var date = "2019";
            tags = "react " + tags + tags

            items.push(
                <ProjectItem description={description}
                           name={name}
                           date={date}
                           tags={tags}/>)
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