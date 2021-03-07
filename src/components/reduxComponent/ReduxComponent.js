import React from 'react';
import {store} from "./components/componentTutorial/store/index";
import {Provider} from "react-redux";
import Bank from "./components/componentTutorial/Bank";
import BanRedux from "./components/componentBank/BanRedux";

const action = {type: "?", payload: "?"}





const ReduxComponent = () => {
    return (
        <div>
        <Provider store={store}>
            <Bank/>
        </Provider>
            <BanRedux/>
        </div>
    );
};

export default ReduxComponent;