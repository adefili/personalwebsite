import React from 'react';
import styled from 'styled-components'
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
                items.push(<a className="menuContent">{text.menu[i].content[j].text[this.props.language]}</a>);
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