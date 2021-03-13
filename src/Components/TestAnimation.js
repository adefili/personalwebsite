import React from 'react';
import {Spring} from 'react-spring/renderprops';

class TestAnimation extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="paper">
            <div className="jumboTitle" >TestAnimation</div>   

            <Spring from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                {props => <div style={props}>hello</div>}
            </Spring>
        </div>
            
          );
      }
}

export default TestAnimation;