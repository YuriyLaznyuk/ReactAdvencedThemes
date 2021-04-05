import React, {useReducer, useState} from 'react';
import LoginUseState from "./LoginUseState";
import './style.css'
import LoginUseReducer from "./LoginUseReducer";

function UseReducerHook(props) {
    const initialState = {quantity: 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    const [count, setCount] = useState(0);

    function reducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART":
                return {quantity: state.quantity + action.payload};
            case "REMOVE_FROM_CART":
                return {quantity: state.quantity - action.payload};
            case "RESET":
                return {quantity: state.quantity = 0};
            default:
                return {quantity: state.quantity};

        }
    }

    function multiClick(action, data) {
        dispatch({type: action, payload: data});

    }

// for useState button
    function universalClick(data) {
        setCount(count + data);

    }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>useReducer button</h2>
            <button onClick={() => multiClick("ADD_TO_CART", 10)}>Add to Cart</button>
            <button style={{margin: 10}} onClick={() => multiClick("REMOVE_FROM_CART", 1)}>Remove to Cart</button>
            <button onClick={() => multiClick("RESET")}>Reset</button>

            <p>{state.quantity}</p>
            <h2>useState button</h2>
            <button onClick={() => universalClick(3)}>Add</button>
            <button style={{margin: 10}} onClick={() => universalClick(-1)}>Del</button>
            <button onClick={() => universalClick(-count)}>Clear</button>
            <h3>{count}</h3>
            <h3>Login useState</h3>
            <LoginUseState/>
            <h3>Login useReducer</h3>
            <LoginUseReducer/>

        </div>
    );
}

export default UseReducerHook;