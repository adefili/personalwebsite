import React from 'react';

class GraphDescription extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GraphDescription">
                <div dangerouslySetInnerHTML={{ __html: this.props.description}}>
                </div>
            </div>
          );
      }
}

export default GraphDescription;