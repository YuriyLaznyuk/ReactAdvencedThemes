import React, {Component} from 'react';
import dino1 from './dino1jpg.jpg'

class Dino extends Component {
    render() {
        let dino = this.props.dino;
        return (

            <img src={dino1} alt="dino"
                 style={{
                     position: 'absolute', top: dino.y, left: dino.x,
                     width: '80px', height: '80px'
                 }}/>
        );
    }
}

export default Dino;