import React from 'react';
import { Jumbotron, ButtonGroup, ToggleButton} from 'react-bootstrap';

class GraphMultiSelector extends React.Component{
    constructor() {
        super();
        this.state = {
            language: "en",
            radioValue: 0,
            radios: [
                { name: 'Data Engineering', short:"data", radio_idx: 0},
                { name: 'Front End', short:"front", radio_idx: 1},
                { name: 'Accademic', short:"accademic", radio_idx: 2},
                { name: 'Productivity', short:"productivity", radio_idx: 3}
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
                    <ButtonGroup toggle className="graphButtonGroup">
                        {this.state.radios.map((radio, idx) => (                      
                        <ToggleButton
                            key={idx}
                            type="radio"
                            className="graphButton"
                            name="radio"
                            value={radio.radio_idx}
                            checked={this.state.radioValue === radio.radio_idx}
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