import React from 'react'
import style from "./NavigationTabBar.module.css"
import { Link } from 'react-router-dom';
import Text from '../Text/Text';

function NavigationTabBar() {
    const navigationTapBAr = [
        { title: "Profile", url: "/my-account" },
        { title: "Email & Password", url: "/update-account-details" },
        { title: "Setting", url: "/setting" },
      ];
  return (
    <div className={style.NavigationTabBar}>
            {navigationTapBAr.map((item, index) => {
              const { title, url } = item;
              return (
                <Link className={style.navBarList} to={url}>
                 
                  <Text className={style.NavigationText} test={title} />
                </Link>
              );
            })}
          </div>
  )
}

export default NavigationTabBar