import { Graph } from "react-d3-graph";
import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import graph_data_eng from './../json/data_eng_graph_content.json';
import graph_front_end from './../json/front_end_graph_content';
import GraphMultiSelector from './GraphMultiSelector';
import GraphDescription from './GraphDescription';

class GraphVisualization extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          graph: "data",
          width: window.innerWidth
        };
        this.graphVisualizationRef = React.createRef()
        this.changeGraph = this.changeGraph.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.onClickNode = this.onClickNode.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    changeGraph(e){
        console.log(e);
        this.setState({graph: e});
    }

    handleResize(e){
        console.log("ciao");
        this.setState({width: window.innerWidth});
    }

    onClickNode(nodeId) {
        this.graphVisualizationRef.current.changeText(nodeId);
        this.graphVisualizationRef.current.changeLanguage(nodeId);
    };

    onClickLink(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);

    };

    render() {
        var width = 100;
        if(this.state.width < 1080){
            width = this.state.width * 90 * 935 / 1000 / 100;
        }
        else {
            width = 1080;
        }

        // the graph configuration, just override the ones you need
        const myConfig = {
            width: width,
            nodeHighlightBehavior: true,
            staticGraph: false,
            automaticRearrangeAfterDropNode: true,
            highlightDegree: 2,
            highlightOpacity: 0.3,
            initialZoom: 0.8,
            maxZoom: 0.8,
            minZoom: 0.8,
            d3: {
                gravity: -1000,
                linkLength: 160,
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

        var graph_data = null;
        if(this.state.graph == "front"){
            graph_data = graph_front_end;
        }
        if(this.state.graph == "data"){
            graph_data = graph_data_eng;
        }

        return (
            <div className="paper">   
            <div className="GraphVisualization">
                <div className="jumboTitle">Tools and skill</div>    
                <div className="GraphMaster">
                    <GraphMultiSelector handler={this.changeGraph}/>
                    <div className="GraphContainer">
                        <Graph className="GraphContent"
                            id="graph-id"
                            data={graph_data}
                            config={myConfig}
                            onClickNode={this.onClickNode}
                            onClickLink={this.onClickLink}
                        />
                        <GraphDescription ref={this.graphVisualizationRef} />
                    </div>  
                </div>
            </div>
            </div>
        );
    }
}

export default GraphVisualization;