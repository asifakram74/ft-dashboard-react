import React from "react";
import Steps from "./../components/Steps";
import Button from "../components/globalComponents/Button";
import Layout from "../components/globalComponents/Layout";

const Setup_Device = () => {
  return (
    <>
      <Layout></Layout>
      <div className="setup-device">
        <div className="bg-setup">
          <div>
            <h2 className="">
              Setup <br />
              Your Kid Device
            </h2>
            <p>Perform all these steps on your kid’s device</p>
          </div>
        </div>

        <div className="step setup">
          <div className="step-body">
            <Steps
              icon="/images/icon/click.svg "
              title="Step 1:"
              text="Open the site &#8221;get.familytime.io&#8221;  in browser, on  kid's device."
            />
            <Steps
              icon="/images/icon/download.svg "
              title="Step 2:"
              text="On your kid's device, download and install FamilyTime Jr."
            />
            <Steps
              icon="/images/icon/parent.svg "
              title="Step 3:"
              text="Open the FamilyTime Jr. app and login with parent account information."
            />
            <Steps
              icon="/images/icon/setting.svg "
              title="Step 4:"
              text="Follow the in-app instructions on kid's device to complete the setup."
            />
          </div>

          <Button
            url="#"
            title="View Detailed Instructions"
            img="/images/icon/browser_link_icon.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Setup_Device;
