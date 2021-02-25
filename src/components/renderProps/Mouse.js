import React, {Component} from 'react';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state={
            x:0,y:0
        }
    }
onMouseMove=e=>this.setState({x:e.clientX,y:e.clientY})
    render() {
        return (
                <div style={{height:'150px'}}  onMouseMove={this.onMouseMove} >
                    {/*<p>Coordinates Mouse X:{this.state.x}  Y:{this.state.y}</p>*/}
                    {this.props.render1(this.state)}
                </div>

        );
    }
}

export default Mouse;