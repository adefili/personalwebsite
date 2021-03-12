import { Navbar, Nav, Dropdown} from 'react-bootstrap';
import React from 'react';
import logo_en from './../Img/EN.svg';
import logo_it from './../Img/IT.svg';

class LanguageButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lan: "EN",
            lan_logo: logo_en,
          };
        this.changeLan = this.changeLan.bind(this);
    }

    changeLan(e){
        this.setState({ lan: e });
        if (e === "EN"){
            this.setState({ lan_logo: logo_en });
            this.props.handler("en");
        }
        if (e === "IT"){
            this.setState({ lan_logo: logo_it });
            this.props.handler("it");
        }
    }

    render() {
        return (
            <div className="LanguageButton" > 
                    <Dropdown onSelect={this.changeLan}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="DropDown">
                            {this.state.lan} <img src={this.state.lan_logo} alt="\logo\" className="flagIcon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" eventKey="EN">Eglish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" eventKey="IT">Italiano</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </div>
          );
      }
}

export default LanguageButton;