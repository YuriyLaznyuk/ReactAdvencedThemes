import React, {Component} from 'react';
import {themesOne} from "./themes/themesOne";
import {MyContext1} from "./themes/themesOne";
import CustomButton from "./CustomButton";
import './themes/themesStyle.css'
import ThemeButton from "./ThemeButton";


class AppContext extends Component {
    constructor(props) {
        super(props);
        this.state={
            theme:themesOne.light
        }
    }

    onChangeTheme=()=>{
        this.setState({
            theme: this.state.theme===themesOne.light ?
                themesOne.dark : themesOne.light


        });
    }

    render() {
        return (
            <div>
                <MyContext1.Provider value={this.state.theme}>
                    <CustomButton changeTheme={this.onChangeTheme}
                                  color={this.state.theme.background}/>

                </MyContext1.Provider>


                <CustomButton changeTheme={this.onChangeTheme}
                color={this.state.theme.background}/>

                <ThemeButton name={'button '}/>

            </div>
        );
    }
}

export default AppContext;