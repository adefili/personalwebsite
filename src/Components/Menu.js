import React from 'react';
import styled from 'styled-components'

class Menu extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const StyledMenu = styled.nav`
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #EFFFFA;
            transform: ${({ open }) => this.props.open ? 'translateX(0)' : 'translateX(-100%)'};
            height: 100vh;
            text-align: left;
            padding: 2rem;
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 0.3s ease-in-out;
              
            @media (max-width: 576px) {
                width: 100%;
            }
        
            a {
                font-size: 2rem;
                text-transform: uppercase;
                padding: 2rem 0;
                font-weight: bold;
                letter-spacing: 0.5rem;
                color: #0D0C1D;
                text-decoration: none;
                transition: color 0.3s linear;
        
                @media (max-width: 576px) {
                  font-size: 1.5rem;
                  text-align: center;
                }
            
                &:hover {
                  color: #343078;
                }
            }
        `
        return (
            <StyledMenu open={this.props.open}>
                <a href="/">
                    <span role="img" aria-label="about us">💁🏻‍♂️</span>
                    About us
                </a>
                <a href="/">
                    <span role="img" aria-label="price">💸</span>
                    Pricing
                </a>
                <a href="/">
                    <span role="img" aria-label="contact">📩</span>
                    Contact
                </a>
            </StyledMenu>
        );
    }
}

export default Menu;