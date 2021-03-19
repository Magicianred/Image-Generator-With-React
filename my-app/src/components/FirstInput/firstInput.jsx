import React from 'react';
import './style.css'

let FirstInput = () =>{
    return(
        <React.Fragment className = "firstInput">
            <input placeholder = "Enter your quote"/>
            <button type = "submit">Submit</button>
        </React.Fragment>
    )
}
export default FirstInput