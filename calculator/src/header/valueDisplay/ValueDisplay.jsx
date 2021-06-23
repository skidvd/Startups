import React from 'react';

import './ValueDisplay.css';

const ValueDisplay = (props) => {
    return (
        <div className="value-display">{props.value}</div>
    )
}

export default ValueDisplay;
