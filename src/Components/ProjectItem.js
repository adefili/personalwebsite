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
            width: window.innerWidth,
        }
        this.onVisible = this.onVisible.bind(this);
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
        var tags = [];
        var showTag = true;
        if(this.state.width < 680) showTag = false;
        console.log(showTag);

        for (var idx = 0; idx < this.props.tags.length; idx++) {
            tags.push(<span class="ProjectTag">{this.props.tags[idx]}</span>);
        }

        return (  
            <VizSensor onChange={this.onVisible} active={!this.state.isVisible} partialVisibility={true}>
            <div className="ProjectItem" onClick={() => this.hideShowComponent()}>
                <div className="ProjectFlexContainer">
                    <img src={this.props.image} alt="IMG" class="ProjectImage" />
                    <div class="ProjectName">{this.props.name}</div>
                    {showTag && <div class="ProjectTags">{tags}</div>}
                    <div class="ProjectDate">{this.props.date}</div>
                </div>
            <Spring 
                native
                force
                config={{
                    mass: 5,
                    tension: 300,
                    friction: 16,
                    clamp: true,
                    precision: 0.01,
                    velocity: 5,
                    delay: 0
                    }}
                immediate={this.state.block}
                from={{height: this.state.showHidePaper ? 0 : "auto",
                    opacity: this.state.showHidePaper ? 0 : 1,
                    margin: this.state.showHidePaper ? "0px" : "10px"}}
                to={{height: this.state.showHidePaper ? "auto" : 0,
                    opacity: this.state.showHidePaper ? 1 : 0,
                    margin: this.state.showHidePaper ? "10px" : "0px"}}>
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