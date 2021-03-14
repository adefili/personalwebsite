import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import { Button } from 'react-bootstrap';
import MyTimelineSeparator from './MyTimelineSeparator';
import { config, Spring, animated } from 'react-spring/renderprops';

class MyTimelineItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showHidePaper: false,
            block: true,
            rotation: 0,
        };
        this.hideComponent = this.hideShowComponent.bind(this);
    }

    hideShowComponent() {
        this.setState({ block: false });
        this.setState({ showHidePaper: !this.state.showHidePaper });
        if (this.state.showHidePaper) this.setState({ rotation: 0 });
        else this.setState({ rotation: 180 });
    }

    render() {
        const rotate = "rotate(" + this.state.rotation + "deg)";
        const rot = { transform: rotate };

        return (
            <TimelineItem className="TimelineItem">
                <div className="TimelineOppositeItem">
                    <div >{this.props.secondaryText}</div>
                </div>
                <MyTimelineSeparator iconName={this.props.iconName} withConnector={this.props.withConnector} />
                <>
                    <div className="TimelinePaper">
                        <div component="h1" className="TimelineTitleContainer" onClick={() => this.hideShowComponent()}>
                            <div className="TimelineTitleText">
                                {this.props.titleContent}
                                <KeyboardArrowDownRounded style={rot} className="TimelineOpenButton" onClick={() => this.hideShowComponent()} />
                            </div>
                        </div>
                        <Spring 
                            native
                            force
                            immediate={this.state.block}
                            from={{
                                height: this.state.showHidePaper ? 0 : "auto",
                                opacity: this.state.showHidePaper ? 0 : 1,
                            }}
                            to={{
                                height: this.state.showHidePaper ? "auto" : 0,
                                opacity: this.state.showHidePaper ? 1 : 0,
                            }}>
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