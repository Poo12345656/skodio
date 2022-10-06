import React from 'react'
import style from "./Img.module.css"

function Img({src,alt}) {
    return (
      <div><img className={ style.Img} src={src} alt={alt}/></div>
    )
  }
  
  export default Img