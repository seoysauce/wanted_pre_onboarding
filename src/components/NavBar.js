import React from "react";
import "../SCSS/NavBar.scss";
import { maxMenu, minMenu } from "../data/menu";
import NavBarMenu from "./NavBarMenu";
import Magnifier from "./icons/Magnifier";
import Alarm from "./icons/Alarm";
import More from "./icons/More";
import NBadge from "./icons/NBadge";

export default function NavBar() {
  return (
    <>
      <div className="NavBar_navBar">
        <div className="NavBar_mainBar">
          <nav className="NavBar_mainBar_nav">
            <div className="NavBar_navTop">
              <div className="NavBar_navTop_logo">
                <button type="button" className="NavBar_hamberger">
                  <img
                    src="https://static.wanted.co.kr/images/icon-menu.png"
                    alt="hamberger menu"
                    style={{
                      width: "17px",
                      height: "14px",
                      objectFit: "contain",
                    }}
                  />
                </button>
                <a href="/" className="NavBar_logo">
                  <img
                    src="https://www.wantedlab.com/img/logo.png"
                    alt="icon-logo"
                  />
                </a>
              </div>
            </div>
            <ul className="NavBar_menu maxMenu">
              {maxMenu.map(({ label, kind, isNew, isBeta }, idx) => {
                return (
                  <NavBarMenu
                    key={idx}
                    label={label}
                    kind={kind}
                    isNew={isNew}
                    isBeta={isBeta}
                  />
                );
              })}
            </ul>
            <ul className="NavBar_menu minMenu">
              {minMenu.map(({ label, kind }, idx) => {
                return <NavBarMenu key={idx} label={label} kind={kind} />;
              })}
            </ul>
            <aside className="NavBar_aside">
              <ul>
                <li className="NavBar_search">
                  <button
                    type="button"
                    className="searchButton"
                    data-attribute-id="gnb"
                    data-gnb-kind="search">
                    <Magnifier />
                  </button>
                </li>
                <li className="NavBar_notification">
                  <button
                    type="button"
                    className="notiButton"
                    data-attribute-id="gnb"
                    data-gnb-kind="bell">
                    <Alarm />
                    <NBadge />
                  </button>
                </li>
                <li className="NavBar_profile">
                  <button
                    type="button"
                    className="profileButton"
                    data-attribute-id="gnb"
                    data-gnb-kind="photo">
                    <div className="avatarBorder">
                      <div
                        className="avatarImage"
                        style={{
                          backgroundImage:
                            "url(https://k.kakaocdn.net/dn/b9drwu/btrgD4HjGGM/XI0jPTOkk5pCLRPKS91rwK/img_110x110.jpg), url(https://static.wanted.co.kr/images/profile_default.png)",
                        }}></div>
                    </div>
                    <NBadge />
                  </button>
                </li>
                <li className="NavBar_dashboardButton">
                  <a className="dashboardButton" href="/">
                    기업 서비스
                  </a>
                </li>
                <li className="NavBar_asideMenu">
                  <button
                    type="button"
                    className="menuButton"
                    data-attribute-id="gnb"
                    data-gnb-kind="more">
                    <More />
                  </button>
                </li>
              </ul>
            </aside>
          </nav>
        </div>
      </div>
      <div className="NavBar_padding"></div>
    </>
  );
}
