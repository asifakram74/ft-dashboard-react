import React from "react";
import Layout from "../components/globalComponents/Layout";

const Setting = () => {
  return (
    <>
      <Layout></Layout>
      <div id="main">
        <div className="row">
          <div className="col s12 m1 l2">&nbsp;</div>
          <div className="col s12 m10 l8">
            <div className="container">
              <div className="section">
                <h6>&nbsp;</h6>
                <div className="card raduse-12 my-shadow m-2">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub">
                          <a href="parent.html">
                            <img src="images/icon/arrow-left.svg" alt="" />
                          </a>{" "}
                          Settings{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card raduse-12 my-shadow">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">
                          FamilyCare
                        </h2>
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/daily-app.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Daily App Limit</h3>
                            <p className="medium-small">
                              Daily usage limit, Auto limit new apps
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/app-blocker.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">App Blocker</h3>
                            <p className="medium-small">
                              Block apps, Auto block new apps
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/ss-time.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Schedule Screen Time</h3>
                            <p className="medium-small">
                              Bed time, Dinner time, Study time
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/internet-schedule.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Internet Schedules</h3>
                            <p className="medium-small">
                              Days selection, Start & End Time
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/internet-filter.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Internet Filters</h3>
                            <p className="medium-small">
                              Safesearch, Block porn & dating sites
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/place.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Places (Geo-Fence)</h3>
                            <p className="medium-small">
                              Add places, Set virtual Geo-fence
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/funtime.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Funtime</h3>
                            <p className="medium-small">
                              Set fun time, Days selection for fun
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/contact-list.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Contact Watchlist</h3>
                            <p className="medium-small no-border">
                              Contact list, select & track contacts
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-purple.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card raduse-12 my-shadow">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">
                          FamilyWatch
                        </h2>
                        <br />
                        <a
                          className="answer right save_settings"
                          style={{ display: "none" }}
                          href="#!"
                        >
                          <img
                            src="images/icon/save-butn-tab.svg"
                            onclick="this.parentNode.style.display = 'none'"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/calls.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Calls</h3>
                            <p className="medium-small">
                              Enable & disable calls
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>

                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/text-messages.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Text Messages</h3>
                            <p className="medium-small">
                              Enable & disable text messages
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/contacts.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Contacts</h3>
                            <p className="medium-small">
                              Enable & disable contacts
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/locations.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Locations</h3>
                            <p className="medium-small">
                              Enable & disable locations
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/apps.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Apps</h3>
                            <p className="medium-small no-border">
                              Enable & disable apps
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card raduse-12 my-shadow">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">
                          Notifications
                        </h2>
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/location-alert.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Location Alerts</h3>
                            <p className="medium-small">
                              Enable & disable location alerts
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_purpletwo right">
                                <input type="checkbox" className="filled-in" />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/app-alerts.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">App Alerts</h3>
                            <p className="medium-small">
                              Enable & disable app alerts
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_purpletwo right">
                                <input type="checkbox" className="filled-in" />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/contact-alert.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Contacts Watchlist Alerts</h3>
                            <p className="medium-small no-border">
                              Enable & disable contacts alerts
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_purpletwo right">
                                <input type="checkbox" className="filled-in" />
                                <span>&nbsp;</span>{" "}
                              </label>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card raduse-12 my-shadow">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">Device</h2>
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/device info.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Device Info</h3>
                            <p className="medium-small">
                              Device OS, Manufacturer, Language
                            </p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-pink.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/device-passcode.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Device Passcode</h3>
                            <p className="medium-small">Set device passcodet</p>
                            <a href="#!" className="secondary-content">
                              <img
                                src="images/icon/right-arrow-pink.svg"
                                alt=""
                                className="right"
                              />
                            </a>{" "}
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/hide-notifi.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Hide Notifications</h3>
                            <p className="medium-small no-border">
                              Enable & disable notifications
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_pinktwo right">
                                <input type="checkbox" className="filled-in" />
                                <span>&nbsp;</span>{" "}
                              </label>{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card raduse-12 my-shadow">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h2 className="heading_sub left-align left">Sync</h2>
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="images/icon/sync-setting-ico.svg"
                              alt=""
                              className="circle"
                            />
                            <a href="#!">
                              <h3 className="">Sync Settings</h3>
                              <p className="medium-small no-border">
                                Enable & disable sync settings
                              </p>
                            </a>
                          </li>
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

export default Setting;
