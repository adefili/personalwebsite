import React from 'react';
import SportItem from './SportItem';
import { Spring} from 'react-spring/renderprops';

class Sport extends React.Component{
    constructor(props){
        super(props);
    }

    render() {   
        const items = [];
      
        var description = "CIAO"
        for (var idx = 0; idx < 4; idx++) {

            description = "sport fantastico bellissimo sport fantastico bellissimo" + description
            var name = "Sport Name"

            items.push(
                <SportItem description={description}
                           name={name}/>)
        }

        return (
            <div className="paper">
                <div className="jumboTitle" >Sport</div>   
                <div className="Sport">
                    {items}
                </div>
            </div>
        );
    }
}

export default Sport;