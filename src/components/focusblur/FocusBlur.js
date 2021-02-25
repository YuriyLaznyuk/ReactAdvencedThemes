import React, {Component} from 'react';

class FocusBlur extends Component {
    constructor(props) {
        super(props);
        this.state={info:''};
    }


    changeFocus=(e)=>{
        if (e.currentTarget===e.target){
            this.setState({info:'фокус на родителе установлен'})
        }
        else {
            this.setState({info:`фокус на дочернем элементе ${e.target.id}`})
        }

        if (!e.currentTarget.contains(e.relatedTarget)){
            this.setState({info:'фокус внутри родительского элемента'})
        }
    }
    changeBlur=(e)=> {
        if (e.target===e.currentTarget){
            this.setState({info:'фокус на родителе снят'})
        }
        else {
            this.setState({info:`фокус на дочернем элементе снят ${e.target}`})
        }

        if (!e.currentTarget.contains(e.relatedTarget)){
            this.setState({info:'фокус внутри родительского элемента потерян'})
        }

    }
    clickDiv=()=>{
        this.setState({info:"Click"})
    }



    render() {
return(
    <div onFocus={this.changeFocus} onBlur={this.changeBlur}>
        <input type="text" id='1'/><label htmlFor="1">Number 1</label>
        <br/>
        <input type="text" id='2'/><label htmlFor="2">Number 2</label>
        <br/>
        <button onClick={this.clickDiv}>Button</button>
        <p>{this.state.info}</p>
    </div>

)
    }
}

export default FocusBlur;




