import React from 'react';

import './Footer.css';

import {ADDITION, SUBTRACTION, MULTIPLICATION, OPERATORS } from "../calculator/state/state";

const Footer = (props) => {

    const operatorClassName = (op) => {
        switch (op) {
            case ADDITION:
                return 'add'
            case SUBTRACTION:
                return 'subtract'
            case MULTIPLICATION:
                return 'multiply';
            default:
                console.error(`Unsupported operator: ${op}`);
                return '';
        }
    }
    const operators = OPERATORS.map(op => (
        <button className={operatorClassName(op)} onClick={e => {
            e.preventDefault();
            props.dispatch({type: 'operatorSelect', payload: op})
        }} disabled={props.state.firstOperand === undefined || props.state.result !== undefined} key={op}>{op}</button>
    ));

    return (
        <div className="footer">
            <div className="operators">
                {operators}
            </div>
            <button className="calculate-button" onClick={e => {
                e.preventDefault();
                props.dispatch({type: 'calculate'})
            }} disabled={props.state.secondOperand === undefined || props.state.result !== undefined}>Calculate!</button>
            <button className="clear-button" onClick={e => {
                e.preventDefault();
                props.dispatch({type: 'clear'})
            }} disabled={props.state.firstOperand === undefined}>Clear</button>
        </div>
    );
};

export default Footer;
