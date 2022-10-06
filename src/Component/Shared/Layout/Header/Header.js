import React from "react";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import style from "./Header.module.css";
import Icon from "../../Icon/Icon";

function Header() {
  return (
    <div className={style.headerWrapper}>
      <Text className={style.headerHeading}   as="h2" test="Skoodio" />
      <div className={style.headerWrapperIcon}>
        <Icon  className={style.headerIcon} color="white" size="30px" iconName="FaUserFriends" />
        <Icon  className={style.headerIcon} color="white" size="30px" iconName="FaBell" />

        <Button variant="primary" test="+Video" />
      </div>
    </div>
  );
}

export default Header;
