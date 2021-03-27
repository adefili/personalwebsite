import LanguageButton from './Components/LanguageButton';
import Presentation from './Components/Presentation';
import MyTimeline from './Components/MyTimeline';
import GraphVisualization from './Components/GraphVisualization';
import MyParticels from './Components/MyParticels';
import Language from './Components/Language';
import Sport from './Components/Sport';
import Project from './Components/Project';
import BurgerMenu from './Components/BurgerMenu';
import TestAnimation from './Components/TestAnimation';
import React from 'react';

class AllComponents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
    this.presentationRef = React.createRef();
    this.timelineRef = React.createRef();
    this.graphRef = React.createRef();
    this.projectRef = React.createRef();
    this.menuRef = React.createRef();
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lan) {
    this.setState({ language: lan });
    this.presentationRef.current.changeText(lan);
    this.timelineRef.current.changeText(lan);
    this.graphRef.current.changeText(lan);
    this.projectRef.current.changeText(lan);
    this.menuRef.current.changeText(lan);
  }

  render() {
    return (
      <div className="all">
        <MyParticels className="particelsAsBackground"></ MyParticels>
          <div className="WholeSite">
            <BurgerMenu handler={this.updateLanguage} ref={this.menuRef} language={this.state.language}/>  
            <Presentation language={this.state.language} ref={this.presentationRef} />
            <MyTimeline ref={this.timelineRef} language={this.state.language} />
            <GraphVisualization ref={this.graphRef} language={this.state.language} />
            <Project ref={this.projectRef}/>
            <Language />
            <Sport />
          </div>
      </div>
    );
  }
}

export default AllComponents;