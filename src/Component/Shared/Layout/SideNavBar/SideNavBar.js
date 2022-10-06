import React, { useState } from "react";
import Menu from "./Menu/Menu";
import style from "./SideNavBar.module.css";

function SideNavBar() {
  const [showTitle, setShowTitle] = useState(true);
  const myWorkMenus = [
    { title: "All", icon: "FaBorderAll", url: "#" },
    { title: "My Videos", icon: "FaVideo", url: "#" },
    { title: "My Collection", icon: "FaColumns", url: "#" },
  ];
  const myReviewMenus = [
    { title: "Public", icon: "FaGalacticRepublic", url: "#" },
    { title: "Shared with me", icon: "FaShareAlt", url: "#" },
    { title: "Created by me", icon: "FaPenAlt", url: "#" },
    { title: "Saved by me", icon: "FaSave", url: "#" },
  ];

  return (
    <div className={style.sideNavBarWrapper}>
      <Menu
        setShowTitle={setShowTitle}
        showMenuTitle={showTitle}
        showMenuToggle={true}
        menuList={myWorkMenus}
        heading="my Work"
      />
      <Menu
        showMenuTitle={showTitle}
        menuList={myReviewMenus}
        heading="Review"
      />
    </div>
  );
}

export default SideNavBar;
