import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Button from "../components/globalComponents/Button";
import Layout from "../components/globalComponents/Layout";
import Card from "../components/globalComponents/Card";

const Device_Passcode = () => {
  return (
    <>
      <Layout>
        <Toptitle backurl="#" title="Device Passcode" />

        <Card>
          <div className="passcode_body">
            <div className="passcode_card">
              <img src="/images/icon/Passcode_ilustaration.svg" alt="" />
              <h3>Set Device Passcode</h3>
              <p>
                To change passcode, Please enter the new passcode and tap on set
                button. Enter atleast <span>4 characters.</span>
              </p>
            </div>
            <form className="account_form">
              <div className="row">
                <div className="input-field col s12">
                  <input id="pass" type="password" />
                  <label htmlFor="pass" className="">
                    Passcode
                  </label>
                </div>
              </div>
            </form>
          </div>
        </Card>

        <Button url="http://" title="Save" />
      </Layout>
    </>
  );
};

export default Device_Passcode;
