import React, {useState, useEffect} from 'react';
import './styleHooks/HooKuseEffect.css'

export function HooKuseEffect(props) {
    let [line, setLine] = useState(10);
    let [color, setColor] = useState('');
    let [clock, setClock] = useState(new Date());
    let [user, setUser] = useState('')
    useEffect(() => {
        document.title = `number click ${line}`
        document.body.style.backgroundColor = color
        document.getElementById('h1').style.fontSize = `${line}px`
        window.addEventListener('keydown', clickButton);
        return () => {
            window.removeEventListener("keydown", clickButton)
        }
    }, [line, color])

    function clickButton(e) {
        if (e.code === 'KeyZ') {
            setColor('green')
        }
    }

    useEffect(() => {
        let time = setInterval(() => setClock(new Date()), 1000)
        return () => {
            clearInterval(time)

        }

    })
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(responce => responce.json())
            .then(json => setUser(json));
        // если нужно выполнить эффект один раз
        // вторым аргументом пустой массив []
    }, [])


    return (
        <div className='HooKuseEffect'>
            <h1 id={'h1'}>HooKuseEffect {line}</h1>
            <br/>
            <input onClick={() => setLine(i => i + 2)} type="button" value={'digit'}/>
            <input onClick={() => setLine(i => i - 2)} type="button" value={'digit-'}/>
            <input onClick={() => setLine(0)} type="button" value={'0 digit'}/>
            <input onClick={() => setLine(40)} type="button" value={'40 digit'}/>
            <br/><br/>
            <input onClick={() => setColor('red')} type="button" value={'color'}/>
            <input onClick={() => setColor('white')} type="button" value={'color none'}/>
            <div className={'clock'}>
                <h3>Kiev Time {clock.toLocaleTimeString()}</h3>
                <h3>{}</h3>

                <div>User {
                    Object.keys(user).map(
                        item => {
                            return <p key={item}>
                                {item}
                                {/*{user['info'][item]}*/}
                            </p>
                        }
                    )
                }</div>
            </div>

        </div>
    );
}

