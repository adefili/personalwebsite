import './App.css';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import MyTimeline from './Components/MyTimeline';
import GraphVisualization from './Components/GraphVisualization';
import MultiSelector from './Components/MultiSelector';
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
      <div className="WholeSite">
        <Presentation language={this.state.language} ref={this.presentationRef}/>
        <Header handler={this.updateLanguage} />
        <MyTimeline ref={this.timelineRef} language={this.state.language} />
        <GraphVisualization language={this.state.language} />
        <MultiSelector language={this.state.language}  />
      </div>
    );
  }
}

export default AllComponents;