// eslint-disable-next-line no-unused-vars
import React,{useEffect, useState} from 'react';

export function useTicker(props) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setTime(new Date());
        let tick = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return clearInterval(tick);
    }, []);
    return (
        time
    );
}


