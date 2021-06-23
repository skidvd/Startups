import React from 'react';

import './Header.css';
import ValueInput from "./valueInput/ValueInput";
import ValueDisplay from "./valueDisplay/ValueDisplay";

const Header = (props) => {
    // We only display the elements of the calculation that have already been selected
    let display = [<ValueInput value={props.state.firstOperand !== undefined ? props.state.firstOperand : ''} disabled={props.state.operator || props.state.result !== undefined} key='firstOperand' dispatch={props.dispatch}></ValueInput>];
    if (props.state.operator) {
        display.push(<ValueDisplay value={props.state.operator} key='operator' className="operator"></ValueDisplay>)
        display.push(<ValueInput value={props.state.secondOperand !== undefined ? props.state.secondOperand : ''} disabled={props.state.result !== undefined} key='secondOperand' dispatch={props.dispatch}></ValueInput>)
        if (props.state.result !== undefined) {
            display.push(<span className="equal-sign" key='equal-sign'>=</span>);
            display.push(<ValueDisplay value={props.state.result} key='result'></ValueDisplay>);
        }
    }
    return (
        <div className="header">
            {display}
        </div>
    );
};

export default Header;
