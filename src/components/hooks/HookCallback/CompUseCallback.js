import React,{useState,useCallback} from 'react';

const CompUseCallback = () => {
    const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
    const handleReset = () => setAge(0)
    const someValue = "someValue"
    // const doSomething = () => someValue;
    // const  doSomething=useCallback(()=>someValue,[someValue])

    // break re-rendering
    const  doSomething=useCallback(()=>{ return someValue},[someValue])



    return (
        <div>
            <Age age={age} handleClick={handleClick} handleReset={handleReset}/>
            {/*child component is also re-rendered because the */}
            {/*doSomething prop is passed a new callback, with a new reference.*/}
            <Instructions doSomething={doSomething} />
        </div>
    );
};

export default CompUseCallback;







const Age = ({ age, handleClick, handleReset }) => {
    return (
        <div>
            <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
                Today I am {age} Years of Age
            </div>
            <pre> - click the button below 👇 </pre>
            <button onClick={handleClick}>Get older! </button>
            <button onClick={handleReset}>Reset to Zero</button>
        </div>
    )
}

const Instructions = ((props) => {
    return (
        <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
            <p>Follow the instructions above as closely as possible {props.doSomething()}</p>
        </div>
    )
})

