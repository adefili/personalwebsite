import React from 'react';
import Burger from './Burger';
import Menu from './Menu';

class BurgerMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.reference = React.createRef();
        this.setOpen = this.setOpen.bind(this);

    }

    setOpen(){
        this.setState({ open: !this.state.open });
    }

    render(){
        return (
            <div>
                <Burger handler={this.setOpen} />
                <Menu ref={this.reference} open={this.state.open}/>
            </div>
        );
    }
}

export default BurgerMenu;