/** @format */

import React, { useState } from "react";
import Card from "../../../../../../components/globalComponents/Card";
import ControlCard from "./ControlCard";
const QuickControl = (props) => {
  const { data } = props;
  const [toggleLocator, setToggleLocator] = useState(true);
  const [toggleInternet, setToggleInternet] = useState(true);
  const [togglePhoneLock, setTogglePhoneLock] = useState(true);
  const [togglePassCode, setTogglePassCode] = useState(true);

  const [toggleSync, setToggleSync] = useState(false);

  const ChangeLocatorControl = () => {
    setToggleLocator((prev) => !prev);
  };
  const ChangeInternetControl = () => {
    setToggleInternet((prev) => !prev);
  };
  const ChangePhoneLock = () => {
    setTogglePhoneLock((prev) => !prev);
  };
  const ChangePassCode = () => {
    setTogglePassCode((prev) => !prev);
  };
  const ChangeSyncControl = () => {
    setToggleSync((prev) => !prev);
  };
  return (
    <>
      <Card>
        <ul className="controls display-spec mb-0">
          <ControlCard
            changeHandler={ChangeLocatorControl}
            image_false="images/icon/locator.svg"
            image_true="/images/icon/familylocator-ico.svg"
            toggleHandler={toggleLocator}
            title="Locator"
          />
          <ControlCard
            changeHandler={ChangePassCode}
            image_false="images/icon/passcode_light.svg"
            image_true="images/icon/passcode.svg"
            toggleHandler={togglePassCode}
            title="Passcode"
          />
          <ControlCard
            changeHandler={ChangePhoneLock}
            image_false="/images/icon/phone_lock.svg"
            image_true="images/icon/phone_lock_active.svg"
            toggleHandler={togglePhoneLock}
            title="Lock"
          />
          <ControlCard
            changeHandler={ChangeInternetControl}
            image_false="/images/icon/internet_icon_grey.svg"
            image_true="/images/icon/internet_icon_2.svg"
            toggleHandler={toggleInternet}
            title="Internet"
          />
          <ControlCard
            changeHandler={ChangeSyncControl}
            image_false="/images/icon/sync_setting_ico.svg"
            image_true="/images/icon/sync-setting-ico.svg"
            toggleHandler={toggleSync}
            title="Sync"
          />
        </ul>
      </Card>
    </>
  );
};

export default QuickControl;
