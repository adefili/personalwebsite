import React from 'react';
import { Jumbotron, ButtonGroup, ToggleButton} from 'react-bootstrap';

class MultiSelector extends React.Component{
    constructor() {
        super();
        this.state = {
            radioValue: 1,
            content_1: true,
            content_2: false,
            content_3: false,
            content_4: false,
        };
    } 

    setRadioValue(val){
        this.setState({ radioValue: val });
        if (val === 1){
            this.setState({ content_1: true });
            this.setState({ content_2: false });
            this.setState({ content_3: false });
            this.setState({ content_4: false });
        }
        else if (val === 2){
            this.setState({ content_1: false });
            this.setState({ content_2: true });
            this.setState({ content_3: false });
            this.setState({ content_4: false });
        }
        else if (val === 3){
            this.setState({ content_1: false });
            this.setState({ content_2: false });
            this.setState({ content_3: true });
            this.setState({ content_4: false });
        }
        else if (val === 4){
            this.setState({ content_1: false });
            this.setState({ content_2: false });
            this.setState({ content_3: false });
            this.setState({ content_4: true });
        }

        this.setState({ showHidePaper: !this.state.showHidePaper });
    }

    render() {

        const radios = [
            { name: 'Progetti', value: '1' },
            { name: 'Music', value: '2' },
            { name: 'Sport', value: '3' },
            { name: 'Lingue', value: '4' },
          ];
        
        return (
            <Jumbotron className="MultiSelector">
                <div className="ButtonGroup">
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
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
                {this.state.content_1 && (
                    <div className="ContenutoTemp">
                        CIAO1
                    </div>
                )}
                {this.state.content_2 && (
                    <div className="ContenutoTemp">
                        ASDCIAO2
                    </div>                
                )}
                {this.state.content_3 && (
                    <div className="ContenutoTemp">
                        ASDCIAO3ASD
                    </div>                
                )}
                {this.state.content_4 && (
                    <div className="ContenutoTemp">
                        ASDASDCIAO4
                    </div>                
                )}

            </Jumbotron>
                )
            }
}

export default MultiSelector;