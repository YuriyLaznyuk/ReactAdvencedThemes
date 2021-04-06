import React,{useRef,useEffect,useState} from 'react';

function UseRefHook(props) {
    const inputRef=useRef();
    const inputRef2=useRef();
    const [input, setInput]=useState()
    const [user, setUser]=useState([]);
    let text='';
    useEffect(()=>{
       let users= document.querySelectorAll('.users');

       let color=document.querySelector('.color');
        // inputRef.current.focus();
        function addColor(){
            users.forEach(i=>i.style.color='red')
        }
       color.addEventListener('click', addColor);
       return ()=> {color.removeEventListener('click',addColor)}

    })

    useEffect(()=>{
        let users= document.querySelectorAll('.users');

        let color=document.querySelector('.black1');
        function addColor(){
            users.forEach(i=>i.style.color='black')
        }
        color.addEventListener('click', addColor);
        return ()=> {color.removeEventListener('click',addColor)}
    })


    useEffect(
        async ()=>{
            const users  = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await users.json();
            setUser(json);
        },[]
    )
    function mesDel() {
        if (!inputRef.current.value){
            return false;

        }
        else{
            text=inputRef.current.value;
            inputRef.current.value='';
            inputRef.current.focus();
            console.log(text)
        }

    }
    function inputClear() {
        inputRef2.current.value='';
        setInput('');

    }


    return (
        <div style={{textAlign:'center'}}
        >
            <h1>
                UseRefHook
            </h1>
            <input ref={inputRef} />
            <button onClick={()=>mesDel()} >Click Clear</button>
            <p>input control</p>
            <h3 className={'h3'}>{input}</h3>
            <input type="text" ref={inputRef2} onChange={e=>setInput(e.target.value)}/>
            <button onClick={()=>inputClear()}>Click Clear2</button>
            <button className={'color'}>Color</button>
            <button className={'black1'}>Black</button>
            {user.map((item,index)=>
            <div className={'users'} key={index}>{item.name}</div>)}


        </div>
    );
}

export default UseRefHook;