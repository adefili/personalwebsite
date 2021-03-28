import React from 'react';
import SportMusicItem from './SportMusicItem';
import { Spring} from 'react-spring/renderprops';
import text from './../json/sport_music_content.json';

class SportMusic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: "en",
        }
    }

    changeText(lan){
        this.setState({ language: lan });
    }

    render() {   
        const items = [];
      
        for (var i = 0; i < text.item.length; i++) {
            console.log(text.item[i]);
            items.push(
                <SportMusicItem name={text.item[i].name[this.state.language]}
                                date={text.item[i].date}
                                img={text.item[i].img}/>)
        }

        return (
            <div className="paper">
                <div className="jumboTitle" >{text.title[this.state.language]}</div>   
                <div className="Sport">
                    {items}
                </div>
            </div>
        );
    }
}

export default SportMusic;