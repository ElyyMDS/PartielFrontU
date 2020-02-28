import React from 'react';
import './button.scss';
import Link from 'next/link';

const Button = (props) => {

    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderColor: props.borderColor,
        flexBasis: props.flexBasis?props.flexBasis:'',
        width: props.width?props.width:'auto',
        justifyContent: props.justifyContent,
        margin: props.margin
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
                <a onClick={props.onClick ? props.onClick : false}>
                    <p className="button" style={style}>{props.text}</p>
                </a>
            </Link>
        )
    }
}

export default Button