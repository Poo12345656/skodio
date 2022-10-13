import React from "react";
import Button from "../../../Button/Button";
import Text from "../../../Text/Text";
import style from "./Menu.module.css";
import Icon from "../../../Icon/Icon";
import { Link } from "react-router-dom";

function Menu({
  heading,
  menuList,
  showMenuToggle = false,
  isOpen = true,
  setIsOpen,
}) {
  const menuToggleIcon = isOpen
    ? "FaRegArrowAltCircleLeft"
    : "FaRegArrowAltCircleRight";
  return (
    <div className={style.MenuWrapper}>
      <div className={style.workWrapper}>
        {isOpen ? (
          <div>
            <Text color="black" test={heading} />
          </div>
        ) : null}
        <div className={style.hideShow}>
          {showMenuToggle ? (
            <div>
              <Button
                variant="link"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Icon size="20px" color="#808080" iconName={menuToggleIcon} />
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      {menuList.map((item, index) => {
        const { title, icon, url } = item;
        return (
          <div className={style.menuItemWrapper}>
            <Link className={style.sideNavList} to={url}>
              <Button variant="link">
                <Icon className={style.iconBtn} iconName={icon} />
                {isOpen ? <Text color="lightGray" test={title} /> : null}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
