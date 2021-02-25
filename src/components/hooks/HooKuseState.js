import React,{useState} from 'react';

export function HookExample(props) {
    const[count,setCount]=useState(50);
    const[language]=useState('React');
    const[data, setData]=useState('BOMBA');
    const[years, setYears]=useState(10);
    const[form, setForm]=useState({
        email:'react@ukr.net',
        name:'Zina',
        age:35
    })



function funcData(data) {
        setData(data)

}





    return (
        <div>

            <h1>{language}</h1>
            <p>Click count {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Button count click</button>

                <button onClick={()=>setCount(0)}>
                    Clear count
                </button>

            <button onClick={()=>setCount(count-1)}>
                Clear count minus
            </button>
            <button onClick={()=>funcData('REACT')}>React</button>
            <ul onClick={()=>setData('REACTOR')}>setData

            {
                data.split('').map((item,index)=>

                         (
                            <li key={index}>
                                {item }
                            </li>
                        )

                )
            }

            </ul>
            <h2 onClick={()=>setYears(i=>i+5)}>Year  {years}</h2>
            <h2>{data}</h2>

            <input type="button" onClick={()=>setForm({...form, email:"marta2000@ukr.net"})} value='email'/>
            <input type="text" value={form.email}/>
            <p>AIG</p>
            <input onClick={()=>setForm({...form,age:form.age+1})} type="button" value="buttonAge"/>
            <input type="text" value={form.age}/>
            <input onClick={()=>setForm({...form,age:0})} type="button" value="ClearAge"/>


        </div>
    );
}

