import { Graph } from "react-d3-graph";
import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import graph_data_eng from './../json/data_eng_graph_content.json';
import graph_front_end from './../json/front_end_graph_content';
import GraphHeader from './GraphHeader';

class GraphVisualization extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          graph: "data"
        };
        
        this.changeGraph = this.changeGraph.bind(this);
    }

    changeGraph(e){
        console.log(e);
        this.setState({graph: e});
    }

    render() {
        const width = window.innerWidth * 8 / 10

        // the graph configuration, just override the ones you need
        const myConfig = {
            width: width,
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

        var graph_data = null;
        if(this.state.graph == "front"){
            graph_data = graph_front_end;
        }
        if(this.state.graph == "data"){
            graph_data = graph_data_eng;
        }

        return (   
            <div className="GraphVisualization">
                
                <div className="jumboTitle">Tools and skill</div>
                <div className="GraphMaster">
                
                <div className="GraphContainer">
                <GraphHeader handler={this.changeGraph}/>
                <Graph className="GraphContent"
                    id="graph-id"
                    data={graph_data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onClickLink={onClickLink}
                />
                </div>
                </div>
            </div>
          );
    }
}

export default GraphVisualization;