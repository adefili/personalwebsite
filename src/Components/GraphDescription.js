import React from 'react';

class GraphDescription extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lan: "en",
            text: "click a node to show details"
          };
        this.changeText = this.changeText.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeText(e){
        this.setState({ text: e });
    }

    changeLanguage(e){
        this.setState({ lan: e });
    }

    render() {
        return (
            <div className="GraphDescription">
                <div>
                    {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER
                    {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER {this.state.text} PLACEHOLDER
                </div>
            </div>
          );
      }
}

export default GraphDescription;