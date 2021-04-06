import React, {useEffect} from 'react';

function JestTimers(props) {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            props.onSelect(null);
        }, 5000);
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);


    return (
        <div>
            {
                [1, 2, 3, 4].map((choice, index) =>
                    <button key={choice} data-test={choice}
                            onClick={() => props.onSelect(choice)}>
                        {choice}
                    </button>
                )

            }
            <p>{props.item}</p>
        </div>
    );
}


export default JestTimers;