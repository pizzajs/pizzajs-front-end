import React from 'react';

import './styles.css';

export default function Checkbox({Item}) {
    
    return(
        <label className="container">{Item}
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    );

}