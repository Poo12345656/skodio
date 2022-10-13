import React from "react";
import classNames from "classnames";
import style from "./Button.module.css"

function Button({
  test,
  color = "red",
  size,
  variant,
  text,
  textDecoration,
  disabled = false ,
  as: Component = "button",
  children,
  ...rest
}) {
  const buttonClasses = classNames(style.buttonWrapper, {
    [style[color]]: !!color,
    [style[size]]: !!size,
    [style[variant]]: !!variant,
    [style.disabled]:disabled
  });
  return (
    <Component className={buttonClasses} {...rest}>
      {test||children} 
    </Component>
  );
}

export default Button;
