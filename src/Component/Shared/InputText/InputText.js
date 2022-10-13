import React from 'react'
import style from "./InputText.module.css"
import classNames from 'classnames';

function InputText({ isError, ...rest }) {
    const fieldStyle = classNames(style.fieldWrapper,{
        [style.error]: isError
      });
      console.log(isError)
      return (
        
          <input  className={fieldStyle} {...rest} />
        
  )
}

export default InputText