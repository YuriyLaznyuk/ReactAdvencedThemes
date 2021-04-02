import React from 'react';
import HookContextButton from "./HookContextButton";

function HeadButton(props) {
    return (
        <div className={props.color}>
            <HookContextButton onClick={props.onTheme}>
                HeadButton
            </HookContextButton>
        </div>
    );
}

export default HeadButton;