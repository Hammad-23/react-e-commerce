import React from 'react';


function CustomButton(props) {
    return(
      
    <button className={props.class} onClick={props.onclick}>{props.text}</button>

    )
}

export default CustomButton;