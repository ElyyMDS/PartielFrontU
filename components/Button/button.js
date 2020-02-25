import React from 'react';
import './button.scss';

const Button = (props) => {
    return(
        <a href="#" >
            <p className="button" style={{textAlign: props.textAlign, margin: props.margin, padding: props.padding, backgroundColor: props.backgroundColor, color: props.color, width: props.width, border: props.border}}>{props.text}</p>
        </a>
    ); 
}

export default Button