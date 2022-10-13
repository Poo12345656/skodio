import React from 'react'
import classNames from 'classnames'
import style from "./TextArea.module.css"

function TextArea({isError, variant, ...rest}) {
    const textAreaFieldStyle = classNames(style.textAreaFieldWrapper,style.textAreaWrapper,{
        [style.error]:isError,
        [style[variant]]:variant,
      });
  return (
    
    <textarea className={textAreaFieldStyle} {...rest} />
  
  )
}

export default TextArea