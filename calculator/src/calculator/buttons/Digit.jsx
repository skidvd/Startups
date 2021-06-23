import React from 'react';

import './Digit.css';

const Digit = (props) => {
    const classes = `Digit ${props.state.result !== undefined ? 'disabled' : ''}`;
    return (
        <div className={classes} onClick={e => {
            e.preventDefault();
            if (!props.state.result) {
                props.dispatch({type: 'digitClick', payload: props.label})
            }
        }}>
            <span>{props.label}</span>
        </div>
    );
};

export default Digit;
