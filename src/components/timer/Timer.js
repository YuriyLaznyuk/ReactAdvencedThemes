import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    tick = () => {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        this.tiker = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tiker)
    }


    render() {
        return (
            <div>
                <p>Киевское время {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;