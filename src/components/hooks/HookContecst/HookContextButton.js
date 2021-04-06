import React, {useContext} from 'react';
import {Context_hook} from "./hookTheme";

function HookContextButton(props) {
    let context = useContext(Context_hook)
    let {name} = props
    return (
        <div className={context.background}>
            <p>HookContextButton</p>

            <button
                {...props}
                style={{color: props.color}}>
                {name}
                {props.children}

            </button>
        </div>
    );
}

export default HookContextButton;