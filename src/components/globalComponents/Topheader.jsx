import React, { useState } from "react";
import LanguageDropdown from "./Language_Select";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
const Topheader = (props) => {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  const title = props.title ? props.title : "";
  return (
    <>
      <div className="page-topbar navbar navbar-fixed " id="header">
        <nav className="no-shadow ">
          <div className="nav-wrapper">
            <ul className="navbar-list left">
              <li>
                <div className="navigation-background">
                  {props.children}
                  {/* <Link
                    to="#"
                    className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only Parents menu_btn"
                    onClick={showSidebar}
                  >
                    <i className="material-icons">menu</i>
                  </Link> */}
                </div>
              </li>
              <li className="logo-wrapper">
                <Link className="brand-logo darken-1" to="/">
                  <img
                    src="/images/icon/ft-log-main.svg"
                    alt="materialize logo"
                  />
                </Link>
              </li>
            </ul>
            <ul className="top_title text-center">
              <li>
                <p>{title}</p>
              </li>
            </ul>
            <ul className="navbar-list right">
              <li className="profile_main">
                <Dropdown />
              </li>

              <li className="dropdown-language">
                <LanguageDropdown isLiveLanguageUpdate={true} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Topheader;
