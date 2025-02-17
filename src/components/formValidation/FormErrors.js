import React from 'react';

function FormErrors(props) {


    return (
        <div className='formErrors'>
            {Object.keys(props.formErrors).map((fieldName, index) => {
                if (props.formErrors[fieldName].length > 0) {
                    return (
                        <p key={index}>{fieldName} {props.formErrors[fieldName]}</p>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    );
}

export default FormErrors;