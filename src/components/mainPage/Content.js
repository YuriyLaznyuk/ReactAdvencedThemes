import React from 'react';
import Parent from "../portal/Parent";
import './mainPage.css'
import RenderProps from "../renderProps/RenderProps";
import PagePropsType from "../propstype/PagePropsType";
import FileInput from "../fileinput/FileInput";
import {MemoComponent} from "../reactmemo/ReactMemo";
import Timer from "../timer/Timer"
import FocusBlur from "../focusblur/FocusBlur";
import FormValidation from "../formValidation/FormValidation";
import {HookExample} from "../hooks/HooKuseState";
import {HooKuseEffect} from "../hooks/HooKuseEffect";
import {CustomHooks} from "../hooks/CustomHooks";
import AppContext from "../context/AppContext";
import HookContext from "../hooks/HookContecst/HookContext";
import ReactRouterMenu from "../reactRouter/ReactRouterMenu";
import {BrowserRouter} from "react-router-dom";
import ReduxComponent from "../reduxComponent/ReduxComponent";
import ReduxSaga from "../reduxSaga/ReduxSaga";
import CompUseCallback from "../hooks/HookCallback/CompUseCallback";
import CompUseMemo from "../hooks/HookMemo/CompUseMemo";


function Content(props) {
    let name = props.name;
    let content = '';

    switch (name) {
        case 'portal':
            content = <Parent/>;
            break;

        case 'renderprops':
            content = <RenderProps/>;
            break;

        case 'propstype':
            content = <PagePropsType/>
            break;

        case 'fileinput':
            content = <FileInput/>
            break;


        case 'reactmemo':
            content = <MemoComponent email={name+'@ukr.net'}/>
            break;


        case 'timer':
            content = <Timer/>
            break;

        case 'focusblur':
            content = <FocusBlur/>
            break;

        case 'formvalidation':
            content = <FormValidation/>
            break;
        case 'useStatehook':
            content=<HookExample/>
            break;

        case 'useEffecthook':
            content=<HooKuseEffect/>
            break;
        case 'customhook':
            content=<CustomHooks/>
            break;

        case 'context':
            content=<AppContext/>
            break;

        case 'hookcontext':
            content=<HookContext/>
            break;

        case 'reactroutermenu':
            content=<ReactRouterMenu/>
            break;

        case 'reduxcomponent':
            content=<ReduxComponent/>
            break;

        case 'reduxsaga':
            content=<ReduxSaga/>
            break;

        case 'useCallBack':
            content=<CompUseCallback/>
            break;

        case 'useMemo':
            content=<CompUseMemo/>
            break;



        default:
            content = <h1 className='content_h1'>MAIN PAGE CONTENT</h1>
            break;

    }


    return (
        <div>
            {content}
        </div>
    );
}

export default Content;