import LanguageButton from './Components/LanguageButton';
import Presentation from './Components/Presentation';
import MyTimeline from './Components/MyTimeline';
import GraphVisualization from './Components/GraphVisualization';
import MyParticels from './Components/MyParticels';
import Language from './Components/Language';
import Sport from './Components/Sport';
import TestAnimation from './Components/TestAnimation'
import Project from './Components/Project';
import React from 'react';

class AllComponents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
    this.presentationRef = React.createRef()
    this.timelineRef = React.createRef()
    this.graphRef = React.createRef()
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lan) {
    this.setState({ language: lan });
    this.presentationRef.current.changeText(lan);
    this.timelineRef.current.changeText(lan);
    this.graphRef.current.changeText(lan);
  }

  render() {
    return (
      <div className="all">
        <MyParticels className="particelsAsBackground"></ MyParticels>
          <div className="WholeSite">            
            <LanguageButton handler={this.updateLanguage} />
            <Presentation language={this.state.language} ref={this.presentationRef} />
            <MyTimeline ref={this.timelineRef} language={this.state.language} />
            <GraphVisualization ref={this.graphRef} language={this.state.language} />
            <Project />
            <Language />
            <Sport />
          </div>
      </div>
    );
  }
}

export default AllComponents;