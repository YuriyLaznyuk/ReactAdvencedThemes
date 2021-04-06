import React, {Component} from 'react';
import MainMenu from "./mainPage/MainMenu";
import Content from "./mainPage/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(name) {
        this.setState({name: name});
    }

    render() {
        return (
            <div>
                <h1>Hello Advanced Themes</h1>
                <MainMenu
                    name={this.state.name}
                    changeName={this.changeName}/>
                <Content name={this.state.name}/>
            </div>
        );
    }
}

export default App;