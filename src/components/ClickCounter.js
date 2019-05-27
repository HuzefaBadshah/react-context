import React, {Component} from 'react';

class ClickCounter extends Component {
    state = {count: 0};
    increment  = () => {
        this.setState((preState) => preState.count++);
    }
    render() {
        const {count} = this.state;
        return (
            <button onClick={this.increment}>click {count} times</button>
        );
    }
}

export default ClickCounter;