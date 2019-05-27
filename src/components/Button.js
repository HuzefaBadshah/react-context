import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    // static contextType = LanguageContext;
    render() {
        // console.log('contextType:: ', this.context);
        // const text = this.context==='english' ? 'English' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
            {(color) => <LanguageContext.Consumer>
                {(value) => <button className={`ui button ${color}`}>{value.language}</button>}
            </LanguageContext.Consumer>}
            </ColorContext.Consumer>
        );
    }
}

export default  Button;