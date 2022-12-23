import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menuli from "./Dashboard_Component/Menuli";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <aside className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square ">
          <div className="brand-sidebar no-shadow">
            <div className="navigation-background">
              <Link
                to="#"
                className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only Parents menu_btn"
                onClick={showSidebar}
              >
                <i className="material-icons">menu</i>
              </Link>
            </div>
          </div>
          <ul
            className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow myside_bar no-shadow"
            id="slide-out"
            data-menu="menu-navigation"
            data-collapsible="menu-accordion"
          >
            <li className="head_nav">
              <img src="/images/sidebar-icons/male avatar.svg" alt="avatar" />
              <h3>John Doe</h3>
              <Link to="/contact">Trial</Link>
            </li>

            <Menuli url="/MyKids" icon="kids_icon" tile="MyKids" />
            <Menuli
              url="/Notification"
              icon="notification_icon"
              tile="Notifications"
            >
              <span className="badge badge pill orange float-right mr-10">
                3
              </span>
            </Menuli>

            <hr />
            <li className="navigation-header">
              <Link className="navigation-header-text" to="./Setting">
                Settings
              </Link>
            </li>

            <Menuli url="/Parents" icon="parents_icon" tile="Parents" />
            <Menuli url="/Account" icon="account_icon" tile="Account" />
            <hr />

            <li className="navigation-header">
              <Link className="navigation-header-text" to="/">
                Help &amp; Feedback
              </Link>
            </li>

            <Menuli url="/Account" icon="rateus_icon" tile="Rate Us" />
            <Menuli url="/Account" icon="helpdesk_icon" tile="Help Desk" />
            <Menuli url="/Account" icon="terms_of_use" tile="Terms of Use" />
            <Menuli url="/Account" icon="privacy_icon" tile="Privacy Policy" />
            <Menuli
              url="/Account"
              icon="data_collection_icon"
              tile="Data Collections &amp; Use"
            />

            <hr />

            <Menuli url="/Account" icon="logout_icon" tile="Logout" />

            <hr />
            <li className="bold">
              <a className="waves-effect waves-cyan my_lilast" href="/">
                <i className="familytime_icon"></i>
                <span className="menu-title" data-i18n="Calendar">
                  FamilyTime Trial
                </span>
                <p className="nav_lasp menu-title">Free $0/Year</p>
              </a>{" "}
              <a href="/" className="nav_lasa">
                Upgrade
              </a>
              <p className="version_napp">Version 1.0</p>
            </li>
          </ul>
        </div>

        <a
          className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only Parents menu_btn"
          href="#"
          data-target="slide-out"
        ></a>
      </aside>
    </>
  );
};

export default Sidebar;
