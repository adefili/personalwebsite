import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import { Button } from 'react-bootstrap';
import MyTimelineSeparator from './MyTimelineSeparator';
import { interpolate, Spring, animated, config} from 'react-spring/renderprops';
import VizSensor from 'react-visibility-sensor';

class MyTimelineItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showHidePaper: false,
            block: true,
            isVisible: false,
        };
        this.hideComponent = this.hideShowComponent.bind(this);
        this.onVisible = this.onVisible.bind(this);
    }

    onVisible(isVisible){
        if(isVisible){
            console.log(isVisible + "")
            this.setState({isVisible: true});  
        }  
    }

    hideShowComponent() {
        this.setState({ block: false });
        this.setState({ showHidePaper: !this.state.showHidePaper });
    }

    goToWebsite(){
        console.log(this.props.link);
        return;
    }

    render() {
        return (
            <Spring
            config={{ tension: 280, friction: 200 }}
            delay={0}
            from={{opacity: 1}}
            to={{opacity: this.state.isVisible ? 1 : 0}}>
            {props => (
                <VizSensor onChange={this.onVisible} active={!this.state.isVisible} partialVisibility={true}>
                <animated.div style={props}>
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
                                        <div onClick={() => this.hideShowComponent()} style={{ "padding-left": "5%", "padding-right": "5%" }} dangerouslySetInnerHTML={{ __html: this.props.paperContent }}>
                                        </div>
                                    </div>
                                    <div className="TimelineButton">
                                        <Button href={this.props.link} target="_blank">{this.props.buttonContent} </Button>
                                    </div>
                                </animated.div>
                            }
                        </Spring>
                    </div>
                </>
            </TimelineItem>
            </animated.div>
                    </VizSensor>
                    )}              
                </Spring>
        )
    }
}

export default MyTimelineItem;