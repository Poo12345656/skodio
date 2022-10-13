import React from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar/SideNavBar";

import style from "./Layout.module.css";

function Layout({showSideBar=true, children  }) {
  return (
    <div>
      <Header />
      <div className={style.mainContainer}>
        { showSideBar ?  <SideNavBar/> : null}
       

        <div className={style.container}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
