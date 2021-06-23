import React from 'react';

import './ValueInput.css';

const ValueInput = (props) => {
    return (
        <input type="number" className="value-input" value={props.value} onInput={e => {
            console.log(e.target.value);
            props.dispatch({type: 'operandSet', payload: e.target.value})
        }} disabled={props.disabled}></input>
    )
};

export default ValueInput;
