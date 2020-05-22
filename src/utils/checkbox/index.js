import React from 'react';

import './styles.css';

export default function Checkbox({Item, value}) {
    function teste(){
        alert('testei')
    }
    return(
        <label className="container">{Item}
            <input type="checkbox" value={value} onClick={teste}/>
            <span className="checkmark"></span>
        </label>
    );

}