import React from 'react'
import classNames from 'classnames';
import style from "./Text.module.css"

function Text({test,color= "black", as: Tag = "p",children,size="xl", ...rest}) {
    
    const testClasses = classNames(style.testWrapper, {
      [style[color]]: !!color,
      [style[size]]: !!size,

    });
    return (
      <Tag className={testClasses} {...rest}>
        {test || children}
      </Tag>
    );
  }

export default Text