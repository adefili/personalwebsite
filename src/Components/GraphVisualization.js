import { Graph } from "react-d3-graph";
import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import graph_data from './../graph_content.json';

class GraphVisualization extends React.Component{

    render() {
        // the graph configuration, just override the ones you need
        const myConfig = {
            nodeHighlightBehavior: true,
            staticGraph: false,
            automaticRearrangeAfterDropNode: true,
            highlightDegree: 2,
            highlightOpacity: 0.3,
            initialZoom: 1,
            maxZoom: 1.5,
            minZoom: 0.75,
            d3: {
                gravity: -1000,
                linkLength: 150,
            },
            node: {
              color: "lightgreen",
              size: 120,
              highlightStrokeColor: "blue",
            },
            link: {
              highlightColor: "lightblue",
            },
        };

        const onClickNode = function(nodeId) {
            window.alert(`Clicked node ${nodeId}`);
        };

        const onClickLink = function(source, target) {
            window.alert(`Clicked link between ${source} and ${target}`);
        };

        return (   
            <Jumbotron className="GraphVisualization">

                TITOLO
                <div className="GraphMaster">
                <div className="GraphContainer">
                <Graph className="GraphContent"
                    id="graph-id"
                    data={graph_data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onClickLink={onClickLink}
                />
                </div>
                </div>
            </Jumbotron>
          );
    }
}

export default GraphVisualization;