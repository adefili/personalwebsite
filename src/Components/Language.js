import React from 'react';
import LanguageItem from './LanguageItem';
import text from './../json/language_content';
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
        var description = "";
        var width = "";
        var name = "";
        var showDescription = false;
      
        for (var i = 0; i < text.languages.length; i++) {
            showDescription = false;
            for (var j = 0; j < text.languages[i].values.length; j++) {
                width = (100 / 7 * ( text.languages[i].values[j].value));
                description = text.languages[i].description;
                name = text.languages[i].language + " " + text.languages[i].values[j].name;
                if(text.languages[i].values.length - 1 == j) showDescription = true; 
                items.push(
                    <LanguageItem customWidth={width} 
                                  description={description}
                                  name={name}
                                  showDescription={showDescription}/>)
            }
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