import React, {Component} from 'react';
import Context from '../contexts/LanguageContext';

class LanguageSelector extends Component {
    static contextType = Context;
    render() { console.log('LanguageSelector: ', this.context)
        return (
            <div>
            Select a language:
            <i className="flag us" onClick={() => this.context.onLangChange('english', 'green')} />
            <i className="flag nl" onClick={() => this.context.onLangChange('dutch', 'red')} />
        </div>
        );
    }
}

export default LanguageSelector;