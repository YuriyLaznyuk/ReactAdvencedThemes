import React from 'react';

export const MemoComponent=React.memo(
    function MemoComponent (props) {
        return(
            <div>
                <p>Memo Component email:{props.email}</p>
            </div>
        )

    }
)