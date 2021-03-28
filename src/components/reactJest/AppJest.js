import React,{useState} from 'react';
import JestHello from "./JestHello";
import JestFetch from "./JestFetch";
import JestOneFetch from "./JestOneFetch";
import JestToggle from "./JestToggle";
import JestTimers from "./JestTimers";


function AppJest(props) {
    const[text,setText]=useState('')
    const[item,setItem]=useState(null)
    function onChange(state) {
        if (state){
            setText('Hello')
        }
        else setText('By-By')

    }
function onSelect(choice) {
setItem(`  Fire Index ${choice}`)
}
    return (
        <div>
            <JestHello name={'JestHello'}/>
            <JestOneFetch/>

            <JestFetch/>
            <p style={{textAlign:'center'}}>
            {text}
            </p>
            <JestToggle onChange={onChange} text={text}/>
            <JestTimers onSelect={onSelect} item={item}/>
        </div>
    );
}

export default AppJest;