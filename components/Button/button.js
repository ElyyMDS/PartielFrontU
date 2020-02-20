import React from 'react';
import './button.scss';

const Button = (props) => {
    return(
        <a href="#" >
            <p className="button" style={{backgroundColor: props.backgroundColor, color: props.color}}>{props.text}</p>
        </a>
    ); 
}

export default Button