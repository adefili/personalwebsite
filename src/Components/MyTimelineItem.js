import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import { Button } from 'react-bootstrap';
import MyTimelineSeparator from './MyTimelineSeparator';
import { interpolate, Spring, animated } from 'react-spring/renderprops';

class MyTimelineItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showHidePaper: false,
            block: true,
        };
        this.hideComponent = this.hideShowComponent.bind(this);
    }

    hideShowComponent() {
        this.setState({ block: false });
        this.setState({ showHidePaper: !this.state.showHidePaper });
    }

    render() {
        return (
            <TimelineItem className="TimelineItem">
                <div className="TimelineOppositeItem">
                    <div >{this.props.secondaryText}</div>
                </div>
                <MyTimelineSeparator iconName={this.props.iconName} withConnector={this.props.withConnector} />
                <>
                    <div className="TimelinePaper">
                        <div className="TimelineTitleContainer" onClick={() => this.hideShowComponent()}>
                            <div className="TimelineTitleText">
                                {this.props.titleContent}
                                
                            </div>
                            <Spring 
                            native
                            force
                            immediate={this.state.block}
                            from={{rotate: this.state.showHidePaper ? 0 : 180}}
                            to={{rotate: this.state.showHidePaper ? 180 : 0}}>
                            {({rotate}) => 
                                <animated.div style={{transform: interpolate([rotate], (r) => `rotate(${r}deg)`)}}>
                                <KeyboardArrowDownRounded className="TimelineOpenButton" onClick={() => this.hideShowComponent()} />
                                </animated.div>
                            }
                            </Spring>
                        
                            </div>
                        <Spring 
                            native
                            force
                            immediate={this.state.block}
                            from={{height: this.state.showHidePaper ? 0 : "auto",
                                opacity: this.state.showHidePaper ? 0 : 1}}
                            to={{height: this.state.showHidePaper ? "auto" : 0,
                                opacity: this.state.showHidePaper ? 1 : 0}}>
                            {props =>
                                <animated.div style={props} id="TimelineContentContainer">
                                    <div >
                                        <div onClick={() => this.hideShowComponent()} style={{ "padding-left": "5%", "padding-right": "5%" }}>
                                            {this.props.paperContent} {this.props.paperContent} {this.props.paperContent} {this.props.paperContent} {this.props.paperContent} {this.props.paperContent}
                                        </div>
                                    </div>
                                    <div className="TimelineButton">
                                        <Button >{this.props.buttonContent} </Button>
                                    </div>
                                </animated.div>
                            }
                        </Spring>
                    </div>
                </>
            </TimelineItem>
        )
    }
}

export default MyTimelineItem;