import React from 'react';
import LanguageItem from './LanguageItem';
import { Spring} from 'react-spring/renderprops';

class Language extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    render() {   
        const items = [];
        var description = "With the continuous improvement of information "
      
        for (var idx = 0; idx < 4; idx++) {

            var width = (100 / 7 * ( this.getRandomInt(7) +1 )) ;
            description = description + "ciao" + description;
            var name = "English Reading";

            items.push(
                <LanguageItem customWidth={width} 
                              description={description}
                              name={name}/>)
        }

        return (
            <div className="paper">
                <div className="jumboTitle" >Lingue</div>   
                <div className="Language">
                    {items}
                </div>
            </div>
        );
    }
}

export default Language;