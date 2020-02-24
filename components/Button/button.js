import React from 'react';
import './button.scss';

const Button = (props) => {
    return(
        <a href="#" >
            <p className="button" style={{padding: props.padding, backgroundColor: props.backgroundColor, color: props.color, width: props.width}}>{props.text}</p>
        </a>
    ); 
}

export default Button