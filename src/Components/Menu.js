import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-scroll'
import LanguageButton from './LanguageButton';
import text from './../json/menu_content';

const StyledMenu = styled.nav`
            transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
            transition: transform 0.3s ease-in-out;            
        `
class Menu extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        var items = [];
        for (var i = 0; i < text.menu.length; i++) {
            items.push(<div className="menuHead">{text.menu[i].header[this.props.language]}</div>);
            items.push(<div className="menuSeparator"></div>);
            for (var j = 0; j < text.menu[i].content.length; j++){
                if(text.menu[i].content[j].value != "") items.push(<a className="menuContent" href={text.menu[i].content[j].href}><Link to={text.menu[i].content[j].value} spy={true} smooth={true}>{text.menu[i].content[j].text[this.props.language]}</Link></a>);
                else items.push(<a className="menuContent" href={text.menu[i].content[j].href}>{text.menu[i].content[j].text[this.props.language]}</a>);
            }
        }

        return (
            <StyledMenu open={this.props.open} className="styledMenu">
                <LanguageButton handler={this.props.handler} />
                {items}
            </StyledMenu>
        );
    }
}

export default Menu;