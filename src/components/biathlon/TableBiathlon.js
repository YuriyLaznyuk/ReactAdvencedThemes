import React, {useState} from 'react';
import {biathletes} from "./biathletes";
import './biathlon.css'

const arrB = biathletes;
const arrInit = biathletes;

function TableBiathlon(props) {
    const [list, setList] = useState([]);
    const [name, setName] = useState();
    const [btn, setBtn] = useState(null);
    const [revers, setRevers] = useState('hike');
    const [flag, setFlag] = useState(false)

    function arrSort(data, x, y, buttonn) {
        if (list.length > 0) {
            setList([]);
        }

        // one button logic

        (btn === buttonn && flag) ?
            setRevers('hike') :
            setRevers('drop');

        setFlag(!flag);
        setBtn(buttonn);

        setTimeout(() => {
            let arrNew = arrB.sort(function (a, b) {

                if (a[data] > b[data]) {
                    switch (revers) {
                        case "hike":
                            return x;

                        case "drop":
                            return -x;
                    }

                }

                if (a[data] < b[data]) {

                    switch (revers) {
                        case "hike":
                            return y;

                        case "drop":
                            return -y;

                    }

                }
                return 0

            });
            setTimeout(() => {
                setList(
                    arrNew
                )

            }, 300)
            console.log(arrNew)
        }, 100)
    }

    function defaultResult(data, button) {
        if (list.length > 0) {
            setList([]);
        }
        setBtn(button);
        setRevers('hike');
        setFlag(false);

        setTimeout(() => {
            let arrDef = arrInit.sort(function (a, b) {
                if (a[data] > b[data]) {
                    return -1;
                }
                if (a[data<b[data]]){
                    return 1;
                }
                return 0;
            });
            setTimeout(()=>{
              setList(arrInit.reverse());
            },300)

        },100)

    }

    function nameSearch(name, search) {
        setBtn(search);
        if (!name) {
            return
        }
        setList(
            arrB.filter(item => item.name.includes(name))
        )
        setName(null);

    }


    return (
        <div>
            <table className="tableBiathlon">
                <thead>
                <tr>
                    <th colSpan={3}>
                        <input type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)}/>

                        <button onClick={() => nameSearch(name, 'search')}
                                className={(btn === 'search') && null}>Search
                        </button>

                    </th>
                </tr>
                <tr>
                    <th colSpan={3}>
                        <button onClick={() => defaultResult('id', 'def')}
                                className={(btn === 'def') ? 'activeBtn' : null}>default results
                        </button>
                    </th>
                </tr>

                <tr className='tableBiathlon-tr'>
                    <th>
                        NAME
                        <button onClick={() => arrSort('name', -1, 1, 'btn1')}
                                className={(btn === 'btn1') ? 'activeBtn' : null}>
                            {(btn==='btn1' && revers==='drop') ? <span> &#9651;</span> : <span>&#9661;</span>}

                        </button>

                    </th>
                    <th>
                        HIT
                        <button onClick={() => arrSort('hit', 1, -1, 'btn3')}
                                className={(btn === 'btn3') ? 'activeBtn' : null}>
                            {(btn==='btn3'&& revers==='drop' ) ? <span>&#9651;</span>
                                : <span>&#9661;</span> 	}

                        </button>

                    </th>
                    <th>
                        SHORT RATE
                        <button onClick={() => arrSort('speed', 1, -1, 'btn5')}
                                className={(btn === 'btn5') ? 'activeBtn' : null}>

                            {(btn ==='btn5' && revers === 'drop') ? <span> &#9651;</span> : <span> &#9661;</span>}
                        </button>

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.hit}</td>
                                    <td>{item.speed}</td>
                                </tr>
                            )

                        }
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default TableBiathlon;