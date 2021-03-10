import { Navbar, Nav} from 'react-bootstrap';
import React from 'react';

class GraphHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lan: "data"
          };
        this.changeGraphLabel = this.changeGraphLabel.bind(this);
    }

    changeGraphLabel(e){
        this.setState({ graph: e });
        this.props.handler(e);
    }

    render() {
        return (
            <div className="Header" className="sticky-top"> 
                <Navbar variant="dark" bg="dark">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => this.changeGraphLabel("data")}>Data Eng</Nav.Link>
                        <Nav.Link onClick={() => this.changeGraphLabel("front")}>Front End</Nav.Link>
                    </Nav>
                </Navbar>

            </div>
          );
      }
}

export default GraphHeader;