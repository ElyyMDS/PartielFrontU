import React, { useState } from 'react';
import './CustomInput.scss';

const CustomInput = (props) => {
    const [placeholder,setPlaceholder] = useState(props.placeholder);
    const style = {

    }
    props.width ? style.flexBasis = props.width : false;

    return (
      <input 
        className="block_input"
        placeholder={placeholder}
        onChange={props.handleChange}
        style={style}
        onFocus={() => setPlaceholder('')}
        onBlur={() => setPlaceholder(props.placeholder)}/>
    )
}

export default CustomInput
