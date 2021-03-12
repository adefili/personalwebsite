import React from 'react';
import { Jumbotron, ButtonGroup, ToggleButton} from 'react-bootstrap';

class GraphMultiSelector extends React.Component{
    constructor() {
        super();
        this.state = {
            radioValue: 0,
            radios: [
                { name: 'Data Engineer', short:"data", value: 0},
                { name: 'Front End', short:"front", value: 1},
              ]
        };
    } 

    setRadioValue(idx){
        this.setState({ radioValue: idx });
        const res = this.state.radios[idx].short
        this.props.handler(res);
    }

    render() {
        return (
            <div className="GraphMultiSelector">
                <div className="ButtonGroup">
                    <ButtonGroup toggle>
                        {this.state.radios.map((radio, idx) => (                      
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={this.state.radioValue === radio.value}
                            onChange={(e) => this.setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
                )
            }
}

export default GraphMultiSelector;