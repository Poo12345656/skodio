import React from 'react'
import  * as icons from 'react-icons/fa';

import style from "./Icon.module.css"

function Icon({iconName,...rest}) {
    const IconComponent = icons[iconName];
  return (
    <div className={style.iconWrapper}>
        <IconComponent {...rest}/>
    </div>
  )
}
export default Icon