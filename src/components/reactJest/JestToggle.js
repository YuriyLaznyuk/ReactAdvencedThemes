import React,{useState} from 'react';

function JestToggle(props) {
 const  [state,setState]=useState(false)
    return (
      <div style={{textAlign:'center'}}>
          <button style={{display:'block', margin:"20px auto"}} onClick={()=>{
              setState(prevState=>!prevState);

              props.onChange(!state)


          }} data-testid={'toggle'}>
              {state===true ? 'Button On' : 'Button Off' }

          </button>
          {props.text}
      </div>
    );
}

export default JestToggle;