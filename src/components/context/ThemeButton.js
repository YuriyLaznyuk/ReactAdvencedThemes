import React, {Component} from 'react';
import {MyContext1} from "./themes/themesOne";

class ThemeButton extends Component {
    render() {
        return (
            <div className={this.context.background}>
                <p>MyChangeTheme</p>
                <button {...this.props}>
                    {this.props.name}
                    {this.props.children}
                </button>
            </div>
        );
    }
}
ThemeButton.contextType=MyContext1;
export default ThemeButton;