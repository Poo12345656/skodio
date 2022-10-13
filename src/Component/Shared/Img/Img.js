import React from 'react'
import style from "./Img.module.css"

function Img({src,alt,...rest}) {
    return (
      <div><img className={ style.img} src={src} alt={alt} {...rest}/></div>
    )
  }
  
  export default Img