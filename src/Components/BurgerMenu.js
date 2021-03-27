import React from 'react';
import Burger from './Burger';
import Menu from './Menu';

class BurgerMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            language: "en"
        }
        this.reference = React.createRef();
        this.setOpen = this.setOpen.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    changeText(e){
        this.setState({language: e});
    }

    setOpen(){
        this.setState({ open: !this.state.open });
    }

    render(){
        return (
            <div>
                <Burger handler={this.setOpen} />
                <Menu handler={this.props.handler} ref={this.reference} open={this.state.open} language={this.state.language}/>
            </div>
        );
    }
}

export default BurgerMenu;