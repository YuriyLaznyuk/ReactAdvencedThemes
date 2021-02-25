import React,{useEffect,useState}  from 'react';

export function useWindowWidth(props) {

    let[useSize, setUseSize]=useState(false);
    function sizeControl() {
setUseSize(window.innerWidth<1000);
    }
    useEffect(()=>{
        sizeControl();
        window.addEventListener('resize',sizeControl);
        return(
            ()=> window.removeEventListener('resize',sizeControl)
        )
    },[])


    return (
        useSize
    );
}

