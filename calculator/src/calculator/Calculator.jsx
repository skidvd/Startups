import React from 'react';

import './Calculator.css';

import Digit from './buttons/Digit'

const Calculator = (props) => {
    const digitList = (new Array(10).fill().map((e, i) => <Digit key={i} label={i} state={props.state} dispatch={props.dispatch}></Digit>));

    return (
        <div className="face">
            {digitList}
        </div>
    );
};

export default Calculator;
