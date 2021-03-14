import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import Typography from '@material-ui/core/Typography';
import {Button} from 'react-bootstrap';
import MyTimelineSeparator from './MyTimelineSeparator';



class MyTimelineItem extends React.Component{
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
                <MyTimelineSeparator iconName={this.props.iconName} withConnector={this.props.withConnector}/>  
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

export default MyTimelineItem;