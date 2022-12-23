/** @format */

import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../../../components/globalComponents/Card";
import { ReqPut } from "../../../../configs/Request";
import { CheckAuthentication } from "../../../../shared/utility";
import { setSnackbar } from "../../../../store/Snackbar/snackbar";
import Controls from "./Controls";
import LocatorTrue from "../../../../assets//images/icon/familylocator-ico.svg";
import LocatorFalse from "../../../../assets/images/icon/locator.svg";
import PhoneTrue from "../../../../assets//images/icon/phone_lock_active.svg";
import PhoneFalse from "../../../../assets/images/icon/phone_lock.svg";
import InternetTrue from "../../../../assets//images/icon/internet_icon_2.svg";
import InternetFalse from "../../../../assets/images/icon/internet_icon_grey.svg";
import SyncTrue from "../../../../assets//images/icon/sync-setting-ico.svg";
import SyncFalse from "../../../../assets/images/icon/sync_setting_ico.svg";
import _ from "lodash";
const QuickControl = (props) => {
  //   console.log("quick", props);
  const isAllInternetLocked = _.get(
    localStorage,
    "isAllInternetLocked",
    props.controls.is_internet_blocked
  );
  const isAllPhoneLocked = _.get(
    localStorage,
    "isAllPhoneLocked",
    props.controls.is_phone_locked
  );
  //   console.log("isAllInternetLocked", isAllInternetLocked, isAllPhoneLocked);
  const [toggleLocator, setToggleLocator] = useState(true);
  const [toggleInternet, setToggleInternet] = useState(
    isAllInternetLocked == "0" ? false : true
  );
  const [togglePhoneLock, setTogglePhoneLock] = useState(
    isAllPhoneLocked == "0" ? false : true
  );
  const [toggleSync, setToggleSync] = useState(false);
  const [request, setRequest] = useState(false);
  const ChangeLocatorControl = () => {
    setToggleLocator((prev) => !prev);
    setRequest(true);
  };
  const dispatch = useDispatch();
  const ChangeInternetControl = async () => {
    // setRequest(true);
    setToggleInternet((prev) => !prev);
    const status = !toggleInternet === true ? 1 : 0;
    const data = { status: status };
    try {
      const res = await ReqPut("/internetcontrol", data, "MeshServV3");
      if (res.data.status === 200 || res.data.status === true) {
        if (res.data.is_internet_blocked === 1) {
          dispatch(
            setSnackbar(true, "success", "All Children Internet Blocked")
          );
          localStorage.setItem("isAllInternetLocked", "1");
          setToggleInternet(true);
        } else {
          setToggleInternet(false);
          dispatch(
            setSnackbar(true, "success", "All Children Internet Unblocked")
          );
          localStorage.setItem("isAllInternetLocked", "0");
        }
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        dispatch(setSnackbar(true, "error", "Could not Update!"));
        CheckAuthentication(res);
      }
      // setRequest(false);
      console.log("Response", res.data);
    } catch (error) {
      console.log("error updating...");
    }
  };
  const ChangePhoneLock = async () => {
    // setRequest(true);
    setTogglePhoneLock((prev) => !prev);
    const status = !togglePhoneLock === true ? "phonelock" : "phoneunlock";
    const data = { push_type: status };
    try {
      const res = await ReqPut("/devicelock", data, "MeshServV3");
      if (res.data.status === 200 || res.data.status === true) {
        if (togglePhoneLock === false) {
          localStorage.setItem("isAllPhoneLocked", "1");
          dispatch(setSnackbar(true, "success", "All Children Phones Locked"));

          setTogglePhoneLock(true);
        } else {
          localStorage.setItem("isAllPhoneLocked", "0");
          setTogglePhoneLock(false);
          dispatch(
            setSnackbar(true, "success", "All Children Phones Unlocked")
          );
        }
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        dispatch(setSnackbar(true, "error", "Could not Update!"));
        CheckAuthentication(res);
      }
      // setRequest(false);
    } catch (error) {
      console.log("error updating...");
    }
  };
  const ChangeSyncControl = () => {
    setToggleSync((prev) => !prev);
    setRequest(true);
  };
  return (
    <div>
      <Card>
        <ul className="controls display-spec mb-0">
          <Controls
            changeHandler={ChangeLocatorControl}
            image_true={LocatorTrue}
            image_false={LocatorFalse}
            toggleHandler={toggleLocator}
            title="Locator"
          />
          <Controls
            changeHandler={ChangePhoneLock}
            image_true={PhoneTrue}
            image_false={PhoneFalse}
            toggleHandler={togglePhoneLock}
            title="Lock"
          />
          <Controls
            changeHandler={ChangeInternetControl}
            image_true={InternetTrue}
            image_false={InternetFalse}
            toggleHandler={toggleInternet}
            title="Internet"
          />
          <Controls
            changeHandler={ChangeSyncControl}
            image_true={SyncTrue}
            image_false={SyncFalse}
            toggleHandler={toggleSync}
            title="Sync"
          />
        </ul>
      </Card>
    </div>
  );
};

export default QuickControl;
