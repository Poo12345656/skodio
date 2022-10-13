import React from "react";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import style from "./Header.module.css";
import Icon from "../../Icon/Icon";
import Img from "../../Img/Img";
import DropDownList from "../../DropDownList/DropDownList";
import { useState } from "react";
import logo from "../../../../assets/images/skoodio-logo.png";

function Header() {
  const [show, setShow] = useState(false);
  const menuIcon = show ? "FaAngleUp" : "FaAngleDown";

  return (
    <div>
      <div className={style.headerWrapper}>
        <Img className={style.mainLogo} src={logo} />

        <div className={style.headerWrapperIcon}>
          <Icon
            className={style.headerIcon}
            color="#fff"
            size="30px"
            iconName="FaUserFriends"
          />
          <Icon
            className={style.headerIcon}
            color="#fff"
            size="30px"
            iconName="FaBell"
          />
          <div
            className={style.hideShowWrapper}
            onClick={() => {
              setShow(!show);
            }}
          >
            <Img src="https://skoodio-app.s3.amazonaws.com/staging/profile_pic/5fc8e7596c56655c0e01a4ab/1623332552180.png" />
            <Icon
              className={style.upDownKey}
              color="#fff"
              size="25px"
              iconName={menuIcon}
            />
          </div>

          <Button variant="primary" test="+Video" />
        </div>
      </div>
      {show ? (
        <div
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <DropDownList />
        </div>) : ( !show)}
    </div>
  );
}

export default Header;
