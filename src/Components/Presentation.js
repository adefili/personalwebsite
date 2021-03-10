import React from 'react';
import logo from './../Img/libreria.jpg';
import text from './../json/text_content.json';

class Presentation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: text.presentation.title["en"],
            text: text.presentation.body["en"]
          };
    }

    changeText(lan){
        this.setState({ title: text.presentation.title[lan] });
        this.setState({ text: text.presentation.body[lan] });
    }

    render() {
        return (
            <div className="Presentation"> 
                <img src={logo} alt="Logo" className="PresentationImmagine"/>
                <div className="PresentationText">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.text}</p>
                </div>
            </div>
          );
      }
}

export default Presentation;