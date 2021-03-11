import './App.css';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import MyTimeline from './Components/MyTimeline';
import GraphVisualization from './Components/GraphVisualization';
import MultiSelector from './Components/MultiSelector';
import MyParticels from './Components/MyParticels';
import React from 'react';

class AllComponents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
    this.presentationRef = React.createRef()
    this.timelineRef = React.createRef()
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lan) {
    this.setState({ language: lan });
    this.presentationRef.current.changeText(lan);
    this.timelineRef.current.changeTimelineText(lan);
  }

  render() {
    return (
      <div className="all">
        <MyParticels className="particelsAsBackground"></ MyParticels>
          <div className="WholeSite">            
          <Header handler={this.updateLanguage} />
            <Presentation language={this.state.language} ref={this.presentationRef} />
            <div className="paper">
              <MyTimeline className="paper" ref={this.timelineRef} language={this.state.language} />
            </div>
            <div className="paper">
              <GraphVisualization language={this.state.language} />
            </div>
            <MultiSelector language={this.state.language}  />
            
          </div>
      </div>
    );
  }
}

export default AllComponents;