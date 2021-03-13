import React from 'react';
import Grid from '@material-ui/core/Grid';

class Language extends React.Component{
    constructor(props){
        super(props);
    }

    render() {   
        const items = [];
      
        for (var idx = 0; idx < 4; idx++) {
            items.push(
                <div class="grid-container">
                        <div class="LanguageName">English Reading</div>  
                        <div class="LanguageBar"></div>
                        <div class="LanguageDescription">With the continuous improvement of information technology and increasing numbers of Web resources, the mode of English reading teaching has changed fundamentally, and the diversity and flexibility of English reading materials achieve a great progress. Because English reading materials were hand-election</div>
                    </div>)
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