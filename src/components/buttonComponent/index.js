import React from 'react';


function CustomButton(props) {
    return(
      
    <button className={props.class}>{props.text}</button>

    )
}

export default CustomButton;