/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Menuli from "./../../components/Dashboard_Component/Menuli";

import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";

import { makeStyles, useTheme } from "@material-ui/core/styles";
// import VisibleItemList from '../containers/VisibleItemList'
import Topheader from "./Topheader";
import { connect } from "react-redux";
import { logoutUser } from "../../store/authentication/login/async-logout-action";
import { Link } from "react-router-dom";
import { Capitalize } from "../../shared/utility";
import { store } from "../../store/configureStore";
import { useTranslation } from "react-i18next";
import SidebarIcon from "../../assets/images/icon/burgur-ico.svg";
import FemaleAvatar from "../../assets/images/icon/female-avatar.svg";
import MaleAvatar from "../../assets/images/icon/male_avatar.svg";
const drawerWidth = 320;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerToggle = () => {
    store.dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const { t: trans } = useTranslation();

  const drawer = (
    <div>
      <List>
        <div>
          <ul
            className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow myside_bar no-shadow"
            id="slide-out"
            data-menu="menu-navigation"
            data-collapsible="menu-accordion"
          >
            <li className="head_nav pb-3 text-center">
              <img
                src={
                  props.userReducer.user.relationship == "Father"
                    ? MaleAvatar
                    : FemaleAvatar
                }
                alt="avatar"
              />
              {props.userReducer.isSuccess ? (
                <>
                  <h3>{Capitalize(props.userReducer.user.name)}</h3>
                  <p>{Capitalize(props.userReducer.user.billing_status)}</p>
                </>
              ) : (
                ""
              )}
            </li>
            <li className="nav_item">
              <Menuli url="/" icon="kids_icon" tile={trans("menu.Home")} />
              <Menuli
                url="/notifications"
                icon="notification_icon"
                tile={trans("menu.Notifications")}
              >
                {props.allNotificationsData.isSuccess &&
                props.allNotificationsData.totalNotifications ? (
                  <span className="notification-count">
                    {props.allNotificationsData.totalNotifications}
                  </span>
                ) : (
                  ""
                )}
              </Menuli>
            </li>
            <Divider />
            {/* <hr /> */}

            <li className="nav_item">
              <h3 className="navigation-header-text">
                {trans("menu.Settings")}
              </h3>
              <Menuli
                url="/parents"
                icon="parents_icon"
                tile={trans("menu.Parents")}
              />
              <Menuli
                url="/account"
                icon="account_icon"
                tile={trans("menu.Account")}
              />
            </li>

            <Divider />
            <li className="nav_item">
              <h3 className="navigation-header-text">
                {trans("menu.Help & Feedback")}
              </h3>

              <Menuli
                url="/rate_us"
                icon="rateus_icon"
                tile={trans("menu.Rate Us")}
              />
              <Menuli
                url="/help_desk"
                icon="helpdesk_icon"
                tile={trans("menu.Help Desk")}
              />
              <Menuli
                url="/terms_of_use"
                icon="terms_of_use"
                tile={trans("menu.Terms of Use")}
              />
              <Menuli
                url="/privacy"
                icon="privacy_icon"
                tile={trans("menu.Privacy Policy")}
              />
              <Menuli
                url="/data_collection"
                icon="data_collection_icon"
                tile={trans("menu.Data Collections & Use")}
              />
            </li>
            <Divider />

            <li className="nav_item">
              <li className="bold" onClick={props.logoutUser}>
                <Link className="waves-effect waves-cyan ">
                  <i className="logout_icon"></i>
                  <span className="menu-title">{trans("menu.Logout")}</span>
                  {/* <span>{props.children}</span> */}
                </Link>
              </li>
            </li>

            <Divider />

            <li className="nav_item">
              <li className="bold">
                <div className="nav_app_ver">
                  <img src="images/sidebar-icons/familytime.svg" alt="" />
                  <div className="nav_sidebar_credit">
                    {/* <p className="nav_app_second">FamilyTime Trial</p> */}
                    <span>FamilyTime Trial</span>
                    <p>Free $0/Year</p>
                  </div>
                  <a href="/" className="nav_lasa">
                    Upgrade
                  </a>
                </div>

                <p className="version_napp">Version 1.0</p>
              </li>
            </li>
          </ul>
        </div>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Topheader title={props.title}>
          <div className="nav_icon">
            <IconButton
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <img src={SidebarIcon} alt=" " />
            </IconButton>
          </div>
        </Topheader>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.sidebarToggle.toggleSidebar}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton> */}
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
      </div>
    </div>
  );
};
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    homeResponse: state.homeReducer,
    userReducer: state.userReducer,
    allNotificationsData: state.allNotificationsData,
    sidebarToggle: state.sidebarToggle,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
