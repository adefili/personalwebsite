import React from 'react';
import { Transition, animated, Spring} from 'react-spring/renderprops'
import VizSensor from 'react-visibility-sensor';
import {Button} from 'react-bootstrap';

class TestAnimation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showHidePaper : 0
        }
        this.hideComponent = this.hideShowComponent.bind(this);
    } 

    hideShowComponent() {
        this.setState({ showHidePaper: !this.state.showHidePaper });
    }


    render() {
        return (
            <div>
                <div>{this.state.imgViz + "\n"}</div>
                <div className="paper">
                    <div className="jumboTitle" >TestAnimation</div>
                    <p>{this.state.showHidePaper + ""}</p>
                    <Button onClick={() => this.hideShowComponent()}>ANIMATE</Button>
                    <Spring
                        from={{ 
                            height: this.state.showHidePaper ? 0 : "auto",
                            "font-size": this.state.showHidePaper ? 0 : 100
                        }}
                        to={{ 
                            height: this.state.showHidePaper ? "auto" : 0,
                            "font-size": this.state.showHidePaper ? 100 : 0
                            }}>
                        {props => 
                            <animated.div style={props}>{props.height + " " + props.opacity}</animated.div>
                        }
                    </Spring>
                </div>
            </div>               
        );
    }
}

export default TestAnimation;