import React from 'react';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import Ban from "./store/Ban";
import {countReducer} from "./store/countReducer";
import {productReducer} from "./store/productReducer";

function BanRedux(props) {


// const store=createStore(countReducer);
//     if many reducers
const combineReducer=combineReducers(
    {count:countReducer,product:productReducer})
    const store=createStore(combineReducer)

return(
    <Provider store={store}>
        <Ban/>
    </Provider>
)


}

export default BanRedux;