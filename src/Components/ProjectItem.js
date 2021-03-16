import React from 'react';
import {config, Spring} from 'react-spring/renderprops';
import VizSensor from 'react-visibility-sensor';
import {animated} from 'react-spring/renderprops'
import logo from './../Img/libreria.jpg';

class ProjectItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            showHidePaper: false,
            block: true,
        }
        this.onVisible = this.onVisible.bind(this);
        this.width = 0;
    }

    onVisible(isVisible){
        if(isVisible){
            this.setState({isVisible: true});  
        }  
    }

    hideShowComponent() {
        this.setState({ block: false });
        this.setState({ showHidePaper: !this.state.showHidePaper });
    }

    render() { 

        return (  
            <VizSensor onChange={this.onVisible} active={!this.state.isVisible} partialVisibility={true}>
            <div className="ProjectItem" onClick={() => this.hideShowComponent()}>
                <div className="ProjectFlexContainer">
                    <img src={logo} alt="IMG" class="ProjectImage" />
                    <div class="ProjectName">{this.props.name}</div>
                    <div class="ProjectTags">{this.props.tags}</div>
                    <div class="ProjectDate">{this.props.date}</div>
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
                <animated.div style={props} class="ProjectDescription">{this.props.description}</animated.div>
            }
            </Spring>
            </div>
            </VizSensor>
        );
    }
}

export default ProjectItem;

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