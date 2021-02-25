import React from 'react';
import ThemeButton from "./ThemeButton";

function CustomButton(props) {

    return (
        <div className={props.color}>
            <ThemeButton onClick={props.changeTheme}>
                CustomButton
            </ThemeButton>
        </div>
    );
}

export default CustomButton;