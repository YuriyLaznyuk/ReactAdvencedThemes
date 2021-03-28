import React from 'react';

function JestHello(props) {
   if (props.name){
       return(
           <h1 style={{textAlign:"center"}}>Hello {props.name} component</h1>
       )
   }
   else
       return (
           <h1 style={{textAlign:"center"}}>No name component</h1>
       )
}

export default JestHello;