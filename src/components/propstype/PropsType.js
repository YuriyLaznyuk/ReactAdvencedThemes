import React, {Component} from 'react';
import PropTypes from 'prop-types'

class PropsType extends Component {

    render() {
        return (
            <div>
<h1>Props Type Control {this.props.name1}</h1>
                <p>Number room {this.props.number1} </p>
                {this.props.children}
            </div>
        );
    }
}
PropsType.propTypes={
    name1:PropTypes.string,
    number1:PropTypes.number
}

export default PropsType;