import React from 'react';
import './CustomInput.scss';

const CustomInput = (props) => {
    const style = {

    }
    props.width ? style.flexBasis = props.width : false;
      return (
          <input className="block_input" placeholder={props.placeholder} onChange={props.handleChange} style={style}/>
      )
}

export default CustomInput
