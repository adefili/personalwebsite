import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import WorkOutline from '@material-ui/icons/WorkOutline';
import School from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import { Jumbotron, Button} from 'react-bootstrap';
import text from './../json/text_content.json';


class NullComponent extends React.Component{
    render(){
        return (null)
    }
}

class MySeparator extends React.Component{
    icons = {
        keyboardArrowDown: KeyboardArrowDownRounded,
        workOutline: WorkOutline,
        school: School,
    };
    connector = {
        true: TimelineConnector,
        false: NullComponent,
    };

    render(){
        const IconTag = this.icons[this.props.iconName || 'fastfoodIcon'];
        const ConnectorTag = this.connector[this.props.withConnector || 'true'];
        return(
            <TimelineSeparator>
                <TimelineDot color="inherit">
                    <IconTag />
                </TimelineDot>
                <ConnectorTag />
            </TimelineSeparator>
        )
    }
}

class MyTimeLineItem extends React.Component{
    constructor() {
        super();
        this.state = {
            showHidePaper: false,
            rotation: 0,
          };
        this.hideComponent = this.hideShowComponent.bind(this);
    } 

    hideShowComponent() {
        this.setState({ showHidePaper: !this.state.showHidePaper });
        if(this.state.showHidePaper) this.setState({ rotation: 0 });
        else this.setState({ rotation: 180 });
        console.log(this.state.rotation)
    }

    render() { 
        const { showHidePaper } = this.state;
        const rotate = "rotate(" + this.state.rotation + "deg)";
        const rot = { transform: rotate };
        return(
            <TimelineItem className="TimelineItem">
                <div className="TimelineOppositeItem"> 
                    <Typography variant="body2" color="textSecondary">{this.props.secondaryText}</Typography>
                </div>
                <MySeparator iconName={this.props.iconName} withConnector={this.props.withConnector}/>  
                <>
                    <div className="TimelinePaper">
                        <div component="h1" className="TimelineTitleContainer" onClick={() => this.hideShowComponent()}>
                            <div className="TimelineTitleText">
                                {this.props.titleContent} 
                                <KeyboardArrowDownRounded style={rot} className="TimelineOpenButton" onClick={() => this.hideShowComponent()}/>
                            </div>
                        </div>
                        {showHidePaper && (
                            <div>
                                <p>{"\n"}</p>
                                <div className="TimelineTextContainer">
                                    <div onClick={() => this.hideShowComponent()}>
                                        {this.props.paperContent} 
                                    </div>
                                </div>
                                <p>{"\n"}</p>
                                <div className="TimelineButton">
                                <Button >{this.props.buttonContent} </Button>  
                                </div>
                            </div>
                        )}
                    </div>
                </>         
            </TimelineItem>
        )
    }
}

class MyTimeline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: "en",
            selected_index: -1
        };
    }

    render() {   
        const elements = text.timeline.timelineItems;
        const items = [];
      
        for (const [index] of elements.entries()) {
            var separator = "true";
            if(index === elements.length - 1){
                separator = "false";
            }

            items.push(
                <MyTimeLineItem index={index}
                                selected_index={this.state.selected_index}
                                titleContent={elements[index].titleContent[this.state.language]}
                                paperContent={elements[index].paperContent[this.state.language]}
                                secondaryText={elements[index].secondaryText[this.state.language]}
                                buttonContent={elements[index].buttonText[this.state.language]}
                                iconName={elements[index].icon}
                                withConnector={separator}/>)
        }

        return (
            <Jumbotron className="Timeline">
            <div className="jumboTitle" >{text.timeline.timelineTitle[this.state.language]}</div>
            <div className="TimelineComponent">
                <Timeline align="left" >
                    {items}
                </Timeline>
            </div>
            </Jumbotron>
        )
    }
}

export default MyTimeline;