import React from 'react';
import {config, Spring} from 'react-spring/renderprops';
import VizSensor from 'react-visibility-sensor';
import {animated} from 'react-spring/renderprops'

class LanguageItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
        }
        this.onVisible = this.onVisible.bind(this);
        this.width = 0;
    }

    onVisible(isVisible){
        if(isVisible){
            this.width = this.props.customWidth;
            this.setState({isVisible: true});  
        }  
    }

    render() { 

        return (  
            <div>
            <VizSensor onChange={this.onVisible} active={!this.state.isVisible} partialVisibility={true}>
            <div class="grid-container">
                <div class="LanguageA1">A1</div>
                <div class="LanguageA2">A2</div>
                <div class="LanguageB1">B1</div>
                <div class="LanguageB2">B2</div>
                <div class="LanguageC1">C1</div>
                <div class="LanguageC2">C2</div>
                <div class="LanguageL1">L1</div>
                <div class="LanguageName">{this.props.name}</div>
                <Spring
                  config={config.molasses}
                  reset={this.state.isVisible}
                  delay={100}
                  immediate={!this.state.isVisible}
                  from={{ number: 0 }}
                  to={{ number: this.width }}>
                  {props => <animated.div class="LanguageBar" style={{width: props.number + "%"}}></animated.div>}
                </Spring>
                <div class="LanguageDescription">{this.props.description}</div>

                
            </div>
            </VizSensor>
            </div>
        );
    }
}

export default LanguageItem;

/*
                  immediate={this.state.stop}
                  reset={this.state.reset}
                  from={{ number: 0 }}
                  to={{ number: width }}
                  onRest={this.preventAnimation}


                                  <Transition
                  from={{ number: 0 }}
                  to={{ number: this.props.customWidth }}
                  >
                  
                  {props =>  <div class="LanguageBar" style={{width: props.number + "%"}}></div>}
                </Transition>
                  */