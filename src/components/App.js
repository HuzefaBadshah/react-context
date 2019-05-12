import React from 'react';
import {connect} from 'react-redux';
import Postlist from './Postlist';

const App = (props) =>  {
    return (
        <div className="ui container"><Postlist /></div>
    );
}

export default connect()(App);