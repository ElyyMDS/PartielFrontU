import React from 'react';
import './button.scss';
import Link from 'next/link';

const Button = (props) => {

    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderColor: props.borderColor,
        flexBasis: props.flexBasis?props.flexBasis:''
    };

    if (props.type === "submit" ){
    return(
        <button type="submit" style={{border: "none",cursor: 'pointer',fontSize: 20,fontWeight: 'bold'}} >
            <p className="button" style={style}>{props.text}</p>
        </button>
    ) 
    } else {
        return( 
            <Link href={props.href}>
                <a>
                    <p className="button" style={style}>{props.text}</p>
                </a>
            </Link>
        )
    }
}

export default Button