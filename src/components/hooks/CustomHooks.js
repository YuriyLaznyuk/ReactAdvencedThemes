import React from 'react';
import './styleHooks/CustomHooks.css';
import {useWindowWidth} from "./useHooks/useWindowWidth";
import {useTicker} from "./useHooks/useTicker";

export function CustomHooks(props) {

    let userWidth = useWindowWidth();
    let useTime = useTicker();

    return (
        <div className={'CustomHook'}>
            {userWidth && <p>Width {'<'} 1000px HELLO</p>}
            {!userWidth && <p>Width {'>'} 1000px Bay Bay</p>}

            <h3>Ukraine Kiev online Time {useTime.toLocaleTimeString()}</h3>

        </div>
    );
}

