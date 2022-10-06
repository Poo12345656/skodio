import React from "react";
import Button from "../../../Button/Button";
import Text from "../../../Text/Text";
import style from "./Menu.module.css";
import Icon from "../../../Icon/Icon";

function Menu({
  heading,
  menuList,
  showMenuToggle = false,
  showMenuTitle = true,
  setShowTitle
}) {
  const menuToggleIcon = showMenuTitle ? "FaRegArrowAltCircleLeft" : "FaRegArrowAltCircleRight"
  return (
    <div className={style.MenuWrapper}>
      <div className={style.workWrapper}>
        {showMenuTitle ? (
          <div>
            <Text color="black" test={heading} />
          </div>
        ) : null}
        {showMenuToggle ? <Button variant="link" onClick={() => { setShowTitle(!showMenuTitle) }}> <Icon size="30px" color="gray" iconName={menuToggleIcon} /></Button> : null}{" "}
      </div>
      {menuList.map((item, index) => {
        const { title, icon, url } = item;
        return (
          <div className={style.menuItemWrapper}>
            <Button variant="link">
              <Icon size="20px" color="gray" iconName={icon} />
              {showMenuTitle ? <Text color="lightGray" test={title} /> : null}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
