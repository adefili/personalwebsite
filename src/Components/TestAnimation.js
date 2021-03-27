import React from 'react';
import { Transition, animated, Spring} from 'react-spring/renderprops'
import VizSensor from 'react-visibility-sensor';
import styled, { css } from 'styled-components';
import {Button} from 'react-bootstrap';

const StyledTest = styled.button`
        position: relative; top: 10px; left: 10px; width: 2rem; height: 2rem;
    
        div {
          width: 2rem;
          height: 0.25rem;
          transform: rotate(0deg);
          transition: transform 1s linear;
          background: red;
          transform: ${ props => props.animate ? 'rotate(0)' : 'rotate(90deg)'};
        }
      `

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
        const Prova = styled.div`
          transform: rotate(0deg);
          transition: transform .2s ease-out;
          ${ props => props.expanded && css`
            transform: rotate(45deg);
          `};
        `;

        return (
            <div>
                <div>{this.state.imgViz + "\n"}</div>
                <div className="paper">
                    <div className="jumboTitle" >TestAnimation</div>
                    <p>{this.state.showHidePaper + ""}</p>
                    <Prova expanded={ this.state.showHidePaper } >ASDASDASDASD </Prova>
                    <StyledTest animate={this.state.showHidePaper}>
                        <div />
                    </StyledTest>

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