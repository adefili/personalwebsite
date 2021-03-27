import React from 'react';
import styled from 'styled-components'

const StyledBurger = styled.button`

div {
  background: ${ ({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
  transition: all 0.3s linear;
  transform-origin: 1px;

  :first-child {
    transform: ${ props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${ props => props.open ? '0' : '1'};
    transform: ${ props => props.open ? 'translateX(-50px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${ props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`

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

      return (
        <StyledBurger className="Burger" open={this.state.open} onClick={() => this.setOpen()}>
          <div className="BurgerLine" />
          <div className="BurgerLine"/>
          <div className="BurgerLine"/>
        </StyledBurger>
      );
    }
}

export default Burger;