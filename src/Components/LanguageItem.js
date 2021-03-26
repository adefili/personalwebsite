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
                <Spring
                  config={config.molasses}
                  delay={300}
                  from={{opacity: 0, width: 0}}
                  to={{opacity: this.state.isVisible ? 1 : 0, width: this.state.isVisible ? this.width : 0}}>
                  {props => (
                <div class="LanguageGridContainer">
                  <animated.div class="LanguageBar" style={{width: props.width + "%", opacity: props.opacity}}></animated.div>
                  { this.props.showDescription && <animated.div style={{opacity: props.opacity}} class="LanguageDescription" >{this.props.description}</animated.div>}
                  <animated.div style={{opacity: props.opacity}} class="LanguageA1">A1</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageA2">A2</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageB1">B1</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageB2">B2</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageC1">C1</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageC2">C2</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageL1">L1</animated.div>
                  <animated.div style={{opacity: props.opacity}} class="LanguageName">{this.props.name}</animated.div>
                  </div>
                  )}
                  </Spring>

                
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