import React, {Component} from 'react';
import Modal from "./Modal";
import {Child} from "./Child";

class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: 0,
        }
    }

    btnClick = () => {
        this.setState({
            click: this.state.click + 1
        });
    }

    render() {
        return (
            <div onClick={this.btnClick}>
                <p>Quantity click {this.state.click}</p>
                <p>Look in the browsers</p>

                <Modal>
                    <Child/>
                </Modal>
            </div>
        );
    }
}

export default Parent;