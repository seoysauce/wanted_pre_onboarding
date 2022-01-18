import React from "react";
import New from "./icons/New";
import Beta from "./icons/Beta";

export default function NavBarMenu({ label, kind, isNew, isBeta }) {
  return (
    <li
      className="NavBar_menu-item"
      data-attribute-id="gnb"
      data-gnb-kind={kind}>
      <a href="/">
        {label}
        {isNew && <New />}
        {isBeta && <Beta />}
      </a>
    </li>
  );
}
