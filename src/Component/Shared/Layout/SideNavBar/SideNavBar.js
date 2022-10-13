import React, { useState } from "react";
import Menu from "./Menu/Menu";
import style from "./SideNavBar.module.css";

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(true); //use State
  const myWorkMenus = [
    { title: "All", icon: "FaBorderAll", url: "/all" },
    { title: "My Videos", icon: "FaVideo", url: "/my-video" },
    { title: "My Collection", icon: "FaColumns", url: "/my-collection" },
  ];
  const myReviewMenus = [
    { title: "Public", icon: "FaGalacticRepublic", url: "/" },
    { title: "Shared with me", icon: "FaShareAlt", url: "/shared-with-me" },
    { title: "Created by me", icon: "FaPenAlt", url: "/created-by-me" },
    { title: "Saved by me", icon: "FaSave", url: "/saved-by-me" },
  ];

  return (
    <div className={style.sideNavBarWrapper}>
      <Menu
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        showMenuToggle={true}
        menuList={myWorkMenus}
        heading="My Work"
      />

      <Menu isOpen={isOpen} menuList={myReviewMenus} heading="Review" />
    </div>
  );
}

export default SideNavBar;
