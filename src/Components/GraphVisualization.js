import { Graph } from "react-d3-graph";
import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import graph_data_eng from './../json/data_eng_graph_content.json';
import graph_front_end from './../json/front_end_graph_content';
import graph_accademic from './../json/accademic_graph_content';
import graph_productivity from './../json/productivity_graph_content';
import graph_other from './../json/productivity_graph_content';
import GraphMultiSelector from './GraphMultiSelector';
import GraphDescription from './GraphDescription';

class GraphVisualization extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          graph: "data",
          width: window.innerWidth,
          language: "en"
        };
        this.graphVisualizationRef = React.createRef()
        this.changeGraph = this.changeGraph.bind(this);
        this.handleResize = this.handleResize.bind(this);
        //this.onClickNode = this.onClickNode.bind(this);
        this.changeText = this.changeText.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    changeText(e){
        this.setState({language: e});
    }

    changeGraph(e){
        this.setState({graph: e});
        console.log(document.getElementsByClassName("GraphContent"));
    }

    handleResize(e){
        this.setState({width: window.innerWidth});
    }

    //onClickNode(nodeId) {
    //    this.graphVisualizationRef.current.changeText(nodeId);
    //    this.graphVisualizationRef.current.changeLanguage(nodeId);
    //};

    //onClickLink(source, target) {
    //    window.alert(`Clicked link between ${source} and ${target}`);
//
    //};

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
            height: 500,
            nodeHighlightBehavior: true,
            staticGraph: false,
            highlightDegree: 2,
            highlightOpacity: 0.3,
            initialZoom: 0.7,
            maxZoom: 1,
            minZoom: 0.5,
            d3: {
                alphaTarget: 0,
                gravity: -700,
                linkLength: 100,
                linkStrength: 1,
            },
            node: {
              color: "lightgreen",
              size: 1000,
              highlightStrokeColor: "blue",
            },
            link: {
              highlightColor: "lightblue",
            },
        };

        var graph_data = null;
        if(this.state.graph == "front") {graph_data = graph_front_end;        }
        if(this.state.graph == "data") graph_data = graph_data_eng;
        if(this.state.graph == "accademic") graph_data = graph_accademic;
        if(this.state.graph == "productivity") graph_data = graph_productivity;
        if(this.state.graph == "other") graph_data = graph_other;

        return (
            <div className="paper">   
            <div className="GraphVisualization">
                <div className="jumboTitle">{graph_data.title[this.state.language]}</div>    
                <div className="GraphMaster">
                    
                    <div className="GraphContainer">
                        <Graph className="GraphContent"
                            id="graph-id"
                            data={graph_data.graph}
                            config={myConfig}
                            //onClickNode={this.onClickNode}
                            //onClickLink={this.onClickLink}
                        />
                        <GraphMultiSelector handler={this.changeGraph}/>
                        <GraphDescription description={graph_data.description[this.state.language]} />
                    </div>  
                </div>
            </div>
            </div>
        );
    }
}

export default GraphVisualization;