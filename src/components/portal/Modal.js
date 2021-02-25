import React, {Component} from 'react';
import ReactDOM from 'react-dom'

let appRoot=document.getElementById('root')
let modalRoot=document.getElementById('modal_root')
class Modal extends Component {
    constructor(props) {
        super(props);
        this.el=document.createElement('div')
        this.el.innerHTML='El---El'
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

   componentWillUnmount() {

    modalRoot.removeChild(this.el)
   }



    render() {
        return (
          ReactDOM.createPortal(
                this.props.children,
                this.el
            )
        );
    }
}

export default Modal;