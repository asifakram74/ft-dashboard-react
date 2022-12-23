import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logoutUser } from "../store/authentication/login/async-logout-action";
import { connect } from "react-redux";
import { Capitalize } from "../shared/utility";
import Loader from "./globalComponents/Loaders/Loader";
import FemaleAvatar from "../assets/images/icon/female-avatar.svg";
import MaleAvatar from "../assets/images/icon/male_avatar.svg";
const List = (props) => {
  return (
    <>
      <MenuItem onClick={props.clicked}>
        <a className="grey-text text-darken-1" href={props.link}>
          <i className="material-icons">{props.icon}</i> {props.title}
        </a>
      </MenuItem>
    </>
  );
};

const Dropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const user = JSON.parse(localStorage.getItem("user"));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log('props.userReducer ===>', props.userReducer.user);
  return (
    <>
      <li className="profile_main">
        {props.userReducer.isSuccess ? (
          <div className="user_name_main">
            <h3 className="user_name">
              {Capitalize(props.userReducer.user.name)}
            </h3>
            <span className="user_status">
              {Capitalize(props.userReducer.user.billing_status)}
            </span>
          </div>
        ) : (
          ""
        )}

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <span className="avatar-status avatar-online">
            <img
              src={
                props.userReducer.user.relationship == "Father"
                  ? MaleAvatar
                  : FemaleAvatar
              }
              alt="avatar"
            />
          </span>
        </Button>
      </li>

      {/* Dropdown */}
      <div className="top_dropdown">
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ disablePadding: true }}
          menuprops={{ disableScrollLock: true }}
        >
          <List
            className
            id="1"
            link="/Account"
            icon="person_outline"
            title="Profile"
          />
          <List className id="2" link="/" icon="help_outline" title="Help" />

          <List
            className
            id="3"
            clicked={props.logoutUser}
            icon="keyboard_tab"
            title="Logout"
          />
          {/* <MenuItem onClick={handleClose}>
                  <a className="grey-text text-darken-1" href="/profile">
                    <i className="material-icons">person_outline</i> Profile
                  </a>
                </MenuItem> */}
          {/* <MenuItem onClick={handleClose}>
                  <a className="grey-text text-darken-1" href="/chat">
                    <i className="material-icons">chat_bubble_outline</i> Chat
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a className="grey-text text-darken-1" href="/help">
                    <i className="material-icons">help_outline</i> Help
                  </a>
                </MenuItem>

                <Divider light />
                <MenuItem onClick={handleClose}>
                  <a className="grey-text text-darken-1" href="/logout">
                    <i className="material-icons">keyboard_tab</i> Logout
                  </a>
                </MenuItem> */}
        </Menu>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
