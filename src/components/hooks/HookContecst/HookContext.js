import React,{useState,useContext} from 'react';
import {themes_hook,Context_hook} from "./hookTheme";
import HookContextButton from "./HookContextButton";
import HeadButton from "./HeadButton";
import './HookContext.css'

function HookContext(props) {
   let [theme, setTheme]=useState(themes_hook.light);
    console.log(theme)

   let MyContext=Context_hook;
   let MyContext1=React.useContext(Context_hook);

    return (
        <div>
<MyContext.Provider value={theme.background}>
    <HeadButton onTheme={()=>setTheme(theme===themes_hook.dark ?
    themes_hook.light : themes_hook.dark)} color={theme.background}/>

</MyContext.Provider>


            <HookContextButton color={MyContext1.foreground}  name={'button'}/>

            <button onClick={()=>setTheme(theme===themes_hook.dark
            ? themes_hook.light : themes_hook.dark)}>Click</button>
        </div>
    );
}

export default HookContext;