import React from 'react';
import {Provider} from "react-redux";
import PanelSaga from "./vew/PanelSaga";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {buttonReducer} from "./store/buttonReducer";
import {peopleReducer} from "./store/peopleReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {countWatcher} from "./saga/countSaga";
import {globalWatcher} from "./saga";


function ReduxSaga(props) {
    const sagaMiddleware=createSagaMiddleware();
    const allReducer={buttonReducer:buttonReducer, peopleReducer:peopleReducer}
    const combineReducer=combineReducers(allReducer)
    const store=createStore(combineReducer, composeWithDevTools(
        applyMiddleware(thunk),applyMiddleware(sagaMiddleware)
    ))
    // sagaMiddleware.run(countWatcher)
    sagaMiddleware.run(globalWatcher)
    return (
        <Provider store={store}>
          <PanelSaga/>
        </Provider>
    );
}

export default ReduxSaga;