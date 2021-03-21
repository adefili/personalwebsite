import React from 'react';
import logo from './../Img/libreria.jpg';
import text from './../json/presentation_content.json';
import {Spring, animated, config} from 'react-spring/renderprops';

class Presentation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: text.title["en"],
            title_salutation: text.title_salutation["en"],
            title_other: text.title_other["en"],
            text: text.body["en"]
          };
    }

    changeText(lan){
        this.setState({ title: text.title[lan] });
        this.setState({ text: text.body[lan] });
        this.setState({ title_salutation: text.title_salutation[lan] });
        this.setState({ title_other: text.title_other[lan] });
    }

    render() {
        return (
            <div className="Presentation"> 
                <div className="PresentationText">
                <img src={logo} alt="Logo" className="PresentationImmagine"/>
                {/*<Spring 
                native force
                config={{mass: 100, tension: 170, friction: 100, clamp: false, velocity: 0}}
                delay={100}
                from={{opacity: 0}}
                to={{opacity: 1}}> 
                {props =>*/}
                <animated.div /*style={props}*/>
                    <span style={{"font-size": "50px"}}>{this.state.title_salutation}</span>
                </animated.div>
                {/*}
                </Spring>
                <Spring 
                native force
                config={{mass: 50, tension: 170, friction: 100, clamp: false, velocity: 0}}
                delay={1000}
                from={{opacity: 0}}
                to={{opacity: 1}}> 
                {props => */}
                <animated.div /*style={props}*/>
                    <span style={{"font-size": "30px"}}>{this.state.title_other}</span>
                </animated.div>
                {/*}
                </Spring>
                <Spring 
                native force
                config={{mass: 100, tension: 170, friction: 50, clamp: false, velocity: 0}}
                delay={1800}
                from={{opacity: 0}}
                to={{opacity: 1}}> 
                {props => }*/}
                <animated.div /*style={props}*/>
                    <p>{this.state.text}</p>
                    
                    </animated.div>
                {/*}
                </Spring>*/}
                
                </div>
            </div>
            
          );
      }
}

export default Presentation;

