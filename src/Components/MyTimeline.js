import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import MyTimelineItem from './MyTimelineItem';
import text from './../json/timeline_content.json';
import { config, animated, Spring} from 'react-spring/renderprops'



class MyTimeline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: "en",
            selected_index: -1
        };
    }

    changeTimelineText(lan){
        this.setState({ language: lan });
    }

    render() {   
        const elements = text.timelineItems;
        const items = [];
      
        for (const [index] of elements.entries()) {
            var separator = "true";
            if(index === elements.length - 1){
                separator = "false";
            }

            items.push(
                    <MyTimelineItem index={index}
                                    selected_index={this.state.selected_index}
                                    titleContent={elements[index].titleContent[this.state.language]}
                                    paperContent={elements[index].paperContent[this.state.language]}
                                    secondaryText={elements[index].secondaryText[this.state.language]}
                                    buttonContent={elements[index].buttonText[this.state.language]}
                                    link={elements[index].link}
                                    iconName={elements[index].icon}
                                    withConnector={separator}/>
                )
        }

        return (
            <div className="paper">
            <div className="Timeline">
            <div className="jumboTitle" >{text.timelineTitle[this.state.language]}</div>
            <div className="TimelineComponent">
                <Timeline align="left" >
                    {items}
                </Timeline>
            </div>
            </div>
            </div>
        )
    }
}

export default MyTimeline;