import React from 'react';
import styled from 'styled-components'

class Burger extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen(){
        this.setState({ open: !this.state.open });
        this.props.handler(this.state.open);
    }

    render(){
        const StyledBurger = styled.button`
          position: absolute;
          top: 5%;
          left: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;

          &:focus {
            outline: none;
          }
      
          div {
            width: 2rem;
            height: 0.25rem;
            background: ${({ open }) => this.state.open ? '#0D0C1D' : '#EFFFFA'};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        
            :first-child {
              transform: ${({ open }) => this.state.open ? 'rotate(45deg)' : 'rotate(0)'};
            }
        
            :nth-child(2) {
              opacity: ${({ open }) => this.state.open ? '0' : '1'};
              transform: ${({ open }) => this.state.open ? 'translateX(20px)' : 'translateX(0)'};
            }
        
            :nth-child(3) {
              transform: ${({ open }) => this.state.open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
          }
        `
      return (
        <StyledBurger open={this.state.open} onClick={() => this.setOpen()}>
          <div />
          <div />
          <div />
        </StyledBurger>
      );
    }
}

export default Burger;