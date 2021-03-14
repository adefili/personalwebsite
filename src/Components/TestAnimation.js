import React from 'react';
import { Transition, animated, Spring} from 'react-spring/renderprops'
import VizSensor from 'react-visibility-sensor';

class TestAnimation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgViz: false,
            index : 0
        }
        this.onVisible = this.onVisible.bind(this); 
    }

    onVisible(isVisible){
        this.setState({imgViz: isVisible});
    }

    render() {
        return (
            <div>
                <div>{this.state.imgViz + "\n"}</div>

                <div className="paper">
                    <div className="jumboTitle" >TestAnimation</div>   
                        <VizSensor onChange={this.onVisible} >
                            <div>CIAO</div>
                        </VizSensor> 
                        <Spring
                  reset={!this.state.imgViz}
                  from={{ number: 0 }}
                  to={{ number: 1 }}>
                  {props => <div>{props.number}</div>}
                </Spring>
                </div>

            </div>               
        );
    }
}

export default TestAnimation;