import React from "react";
import style from "./DropDownList.module.css";
import { Link } from "react-router-dom";

function DropDownList() {
  const menuList = [
    { title: "Admin", url: "/admin" },
    { title: "My profile", url: "/my-profile" },
    { title: "My Account", url: "/my-account" },
    { title: "Log Out", url: "/log-out" },
  ];
  return (
    <div className={style.listWrapper}>
      <ul className={style.listOrderList}>
        {menuList.map((item, index) => {
          return (
            <li className={style.listMenu} Key={index}>
             
              <Link className={style.dropDownList} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDownList;
