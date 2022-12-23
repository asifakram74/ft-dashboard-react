import React, { useState } from "react";
import Card from "../../../components/globalComponents/Card";

const Control = (props) => {
  // const [toggleLocator, setToggleLocator] = useState(false);
  // function Check() {
  //   setToggleLocator((prev) => !prev);
  //   console.log(toggleLocator);
  // }
  return (
    <>
      <li
      //  onClick={Check}
      >
        <div className="text-center controls-icon">
          <img src={props.image1} alt=""></img>
          {/* <img src={props.image2} alt=""></img> */}
          <p>{props.title}</p>
        </div>
      </li>
    </>
  );
};

const QuickControl = () => {
  return (
    <div>
      <Card>
        <ul className="controls display-spec mb-0">
          <Control
            image1="/images/icon/familylocator-ico.svg"
            title="Locator"
          />
          <Control image1="/images/icon/phone_lock.svg" title="Lock" />
          <Control
            image1="/images/icon/internet_icon_grey.svg"
            title="Internet"
          />
          <Control image1="/images/icon/sync_setting_ico.svg" title="Sync" />
        </ul>
      </Card>
    </div>
  );
};

export default QuickControl;
