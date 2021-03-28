import React from 'react';
import {config, Spring} from 'react-spring/renderprops';
import VizSensor from 'react-visibility-sensor';
import {animated} from 'react-spring/renderprops'
import logo from './../Img/libreria.jpg';

class SportItem extends React.Component{
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
            <div class="SportItem">
            <VizSensor onChange={this.onVisible} active={!this.state.isVisible} partialVisibility={true}>
            <div class="Sport-grid-container">
                <img src={logo} alt="IMG" class="SportImage" />
                <div class="SportName">{this.props.name}</div>
                <div class="SportDate">{this.props.date}</div>
            </div>
            </VizSensor>
            </div>
        );
    }
}

export default SportItem;

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