import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Blurb from "./../components/Blurb";
import Layout from "../components/globalComponents/Layout";

const Device_Information = () => {
  return (
    <>
      <Layout></Layout>
      <div id="main">
        <div className="row">
          <div className="col s12 m1 l2">&nbsp;</div>
          <div className="col s12 m10 l8">
            <div className="container">
              <div className="section">
                <Toptitle backurl="#" title="Device Information" />
                <div className="card raduse-12 my-shadow device_info">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <div className="text-center device_info_top">
                          <img
                            src="images/avatar/male_avatar.svg"
                            alt=""
                            className="circle responsive-img activator card-profile-image  padding-0"
                          />
                          <div className="user-detail">
                            <h5 className="card-title activator grey-text text-darken-4 mb-0">
                              Jack Doe
                            </h5>
                            <p>Samsung Galaxy s9</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border device_info_blurb">
                          <Blurb
                            avatar="images/icon/manufecture_icon.svg"
                            title="Manufacturer"
                            subtitle="Samsung"
                            icon="/"
                          />
                          <Blurb
                            avatar="images/icon/devoice_os.svg"
                            title="Device OS"
                            subtitle="8.1.027"
                            icon="/"
                          />

                          <Blurb
                            avatar="images/icon/language_ico.svg"
                            title="Language"
                            subtitle="English"
                            icon="/"
                          />

                          <Blurb
                            avatar="images/icon/timezone-ico.svg"
                            title="TimeZone"
                            subtitle="+ 0500"
                            icon="/"
                          />

                          <Blurb
                            avatar="images/icon/battrey-ico.svg"
                            title="Battery"
                            subtitle="80%"
                            icon="/"
                          />

                          <Blurb
                            avatar="images/icon/wifi-icon.svg"
                            title="WIFI"
                            subtitle="ABC Internet"
                            icon="/"
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card raduse-12 my-shadow device_info">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">
                          App Information
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border device_info_blurb">
                          <Blurb
                            avatar="images/icon/app-version.svg"
                            title="App Version"
                            subtitle="3.0.6.3217.p"
                            icon="/"
                          />
                          <Blurb
                            avatar="images/icon/build.svg"
                            title="Build"
                            subtitle="3217"
                            icon="/"
                          />
                          <Blurb
                            avatar="images/icon/helpdesk-ico.svg"
                            title="Help Desk"
                            subtitle="Live Chat"
                            icon="/"
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h6>&nbsp;</h6>
              </div>
              <div className="content-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Device_Information;
