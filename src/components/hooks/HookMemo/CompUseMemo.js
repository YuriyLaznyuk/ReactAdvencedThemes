import React,{useState,useMemo} from 'react';


function CompUseMemo(props) {
    const [col, setCol]=useState(1);
    const basic=useMemo(()=>({name:"Basic"}));
    const getBasic=()=>basic;
function count() {
    setCol(col+1);

}
    return (
        <div>
            <Heads col={col} clickCount={count}/>
            <MessagesHeads basic={getBasic()}/>
        </div>
    );
}

export default CompUseMemo;

function Heads(props) {
    return(
        <div>
         <button onClick={props.clickCount}>Click Count</button>
       <p style={{background:'#ddd3d3', color:'#6b58d6', padding:10}}>Lorem ipsum dolor sit amet. col: {props.col}</p>
        </div>

    )

}
function MessagesHeads(props) {
    return(
        <div>
        <p style={{background:'#ecd840', color:'#0c2c0f', padding:5}}>Lorem ipsum dolor sit amet. Name: {props.basic.name}  </p>

        </div>
    )

}