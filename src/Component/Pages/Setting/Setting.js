import React from 'react'
import style from "./Setting.module.css"
import Text from '../../Shared/Text/Text'
import Button from '../../Shared/Button/Button'
import Layout from "../../Shared/Layout/Layout"
import NavigationTabBar from "../../Shared/NavigationTabBar/NavigationTabBar"




function Setting() {
  return (
<Layout showSideBar={false}>
<div className={style.settingWrapper}>
   <NavigationTabBar/>
        <Text size="xxl" test="Click on the button below to close your account. All video files, reviews, and data will be deleted."/>
      
        <Button variant="danger" type="submit" test="Close Account" />
            
    </div>
</Layout>
    
  )
}

export default Setting