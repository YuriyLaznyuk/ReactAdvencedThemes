import React from 'react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {usersReducer} from "./usersReducer"
import {composeWithDevTools} from "redux-devtools-extension";
import PanelUsers from "./PanelUsers";
import thunk from "redux-thunk";


function ReduxThunk(props) {
const store=createStore(usersReducer,composeWithDevTools(
    applyMiddleware(thunk)
))
// const store = createStore(usersReducer)
    return (
        <Provider store={store}>

            <div className={'reduxThunk'}>
                <PanelUsers/>
            </div>

        </Provider>

    );
}

export default ReduxThunk;