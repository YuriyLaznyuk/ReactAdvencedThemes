import React from 'react';
import './mainPage.css'


function MainMenu(props) {
    return (
        <div className="MainMenu">
            <ul className='MainMenu_ul'>
                <li
                    className={props.name==='portal'?'red':'blue'}
                    key='portal'
                    onClick={()=>props.changeName("portal")}>Portal</li>
                <li
                    className={props.name==='renderprops'?'red':'blue'}
                    key='thema1'
                    onClick={()=>props.changeName("renderprops")}>RenderProps</li>
                <li
                    className={props.name==='propstype'?'red':'blue'}
                    key='propstype'
                    onClick={()=>props.changeName("propstype")}>PropsType</li>

                <li
                    className={props.name==='fileinput'?'red':'blue'}
                    key='fileinput'
                    onClick={()=>props.changeName("fileinput")}>FileInput</li>

                <li
                    className={props.name==='reactmemo'?'red':'blue'}
                    key='reactmemo'
                    onClick={()=>props.changeName("reactmemo")}>ReactMemo</li>

                <li
                    className={props.name==='timer'?'red':'blue'}
                    key='timer'
                    onClick={()=>props.changeName("timer")}>Timer</li>

                <li
                    className={props.name==='focusblur'?'red':'blue'}
                    key='focusblur'
                    onClick={()=>props.changeName("focusblur")}>FocusBlur</li>

                <li
                    className={props.name==='formvalidation'?'red':'blue'}
                    key='formvalidation'
                    onClick={()=>props.changeName("formvalidation")}>FormValidation</li>
                <li
                    className={props.name==='useStatehook'?'red':'blue'}
                    key='useStatehook'
                    onClick={()=>props.changeName("useStatehook")}>useStateHook</li>

                <li
                    className={props.name==='useEffecthook'?'red':'blue'}
                    key='useEffecthook'
                    onClick={()=>props.changeName("useEffecthook")}>useEffectHook</li>

                <li
                    className={props.name==='customhook'?'red':'blue'}
                    key='customhook'
                    onClick={()=>props.changeName("customhook")}>customHook</li>

                <li
                    className={props.name==='context'?'red':'blue'}
                    key='context'
                    onClick={()=>props.changeName("context")}>Context</li>
                <li
                    className={props.name==='hookcontext'?'red':'blue'}
                    key='hookcontext'
                    onClick={()=>props.changeName("hookcontext")}>hookContext</li>


                <li
                    className={props.name==='reactroutermenu'?'red':'blue'}
                    key='reactroutermenu'
                    onClick={()=>props.changeName("reactroutermenu")}>reactRouterMenu</li>

                <li
                    className={props.name==='reduxcomponent'?'red':'blue'}
                    key='reduxcomponent'
                    onClick={()=>props.changeName("reduxcomponent")}>reduxComponent</li>


                <li
                    className={props.name==='reduxsaga'?'red':'blue'}
                    key='reduxsaga'
                    onClick={()=>props.changeName("reduxsaga")}>reduxSaga</li>


            </ul>
        </div>
    );
}

export default MainMenu;