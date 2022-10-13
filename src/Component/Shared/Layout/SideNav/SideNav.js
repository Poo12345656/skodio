import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Icon from "../../Icon/Icon";
import style from "./SideNav.module.css";
import Button from "../../Button/Button";
import Text from "../../Text/Text";

function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const menuItems = [
    { title: "All", icon: "FaBorderAll" },
    { title: "My Videos", icon: "FaVideo" },
    { title: "My Collection", icon: "FaColumns" },
  ];
  const myReviewMenus = [
    { title: "Public", icon: "FaGalacticRepublic" },
    { title: "Shared with me", icon: "FaShareAlt" },
    { title: "Created by me", icon: "FaPenAlt" },
    { title: "Saved by me", icon: "FaSave" },
  ];

  const menuToggleIcon = isOpen
    ? "FaRegArrowAltCircleLeft"
    : "FaRegArrowAltCircleRight";

  return (
    <div className={(style.sidebar, { "sidebar-closed": !isOpen })}>
      <div className={style.sidebar}>
      {
        isOpen ? <Text test="My Work"/> :null
      }
     
      <Button
        variant="link"
        className={style.sidebarButton}
        onClick={() => setIsOpen(!isOpen)} >
        <Icon  color="gray" size="30" iconName={menuToggleIcon} />
      </Button>
      </div>
      
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <div className={style.sidebarListItem}>
              <Icon  size="20px" color="gray" className={style.sidebarIcon} iconName={item.icon} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={style.fade}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {myReviewMenus.map((item) => (
          <li key={item.title}>
            <div className={style.sidebarListItem}>
              <Icon  color="gray" className={style.sidebarIcon} iconName={item.icon} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={style.fade}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;