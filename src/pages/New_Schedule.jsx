import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toptitle from "../components/globalComponents/Toptitle";
import Layout from "../components/globalComponents/Layout";

toast.configure();
function New_Schedule() {
  /* const notfify = () => {
         toast('Basic Notification')
     } */
  return (
    <>
      <Layout></Layout>
      <div id="main">
        <div className="row">
          <div className="col s12 m12 l2">&nbsp;</div>
          <div className="col s12 m10 l8">
            <div className="container">
              <div className="section">
                <Toptitle backurl="#" title="New Schedule " />

                <div className="card raduse-12 my-shadow">
                  <div className="card-content schedule_inner">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        {" "}
                        <img
                          src="/images/icon/internet-sch-illust.svg"
                          className=""
                          alt=""
                        />
                        <div className="col s9 m9 l9">
                          <h3 className="">Enable Internet Schedule</h3>
                          <p>
                            Set up internet allowance schedules to avoid
                            excessive internet usage.
                          </p>
                        </div>
                        <div className="switch right schedule_toggle inner">
                          <input
                            type="checkbox"
                            id="switch" /* onClick={notfify} */
                          />
                          <label htmlFor="switch"></label>
                          {/*     <input type="checkbox" className="toast-custom" checked />
                      <span className="lever"></span> </label> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card raduse-12 my-shadow no-margin">
                  <div className="card-content internet_schedule add_schedule">
                    <form className="account_form">
                      <div className="row">
                        <div className="input-field col s12 mt-0 mb-2">
                          <input id="name2" type="text" />
                          <label htmlFor="name2" className="active">
                            Name
                          </label>
                        </div>
                      </div>
                    </form>

                    <div className="row">
                      <div className="col s6 m6 l6">
                        <h3>Start Time</h3>
                        <h4 className="slider-time">1:00 AM</h4>
                      </div>
                      <div className="col s6 m6 l6 right-align">
                        <h3>End Time</h3>
                        <h4 className="slider-time2">9:30 AM</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <div className="time_range_slider border_botoom">
                          <div id="time-range">
                            <div className="sliders_step1">
                              <div id="slider-range"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m12 l12">
                        <h6>Select Days In Week</h6>
                        <ul className="weekdays">
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="days_select">
                              {" "}
                            </a>
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
                          Device App List
                        </h2>
                        <br />
                        <a
                          className="answer right save_settings"
                          style={{ display: "none" }}
                          href="#!"
                        >
                          <img
                            src="/images/icon/save-butn-tab.svg"
                            onClick="this.parentNode.style.display = 'none'"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border daily_app_limit_list">
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="/images/icon/android ico.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Instagram</h3>
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
                              src="/images/icon/android ico.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Chrome </h3>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_orange right">
                                <input
                                  type="checkbox"
                                  className="filled-in coupon_question"
                                />
                                <span>&nbsp;</span>
                              </label>
                            </a>
                          </li>
                          <li className="collection-item avatar">
                            {" "}
                            <img
                              src="/images/icon/android ico.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Youtube</h3>
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
              </div>

              <div className="row">
                <div className="col s12 m12 l12">
                  <a className="update_btn" href="#!">
                    Send
                  </a>
                </div>
              </div>

              <h6>&nbsp;</h6>
              <h6>&nbsp;</h6>
              <div className="content-overlay"></div>
            </div>
          </div>
        </div>
        {/*   <!-- END: Page Main--> 
  
  <!-- Theme Customizer --> */}

        <div
          id="theme-cutomizer-out"
          className="theme-cutomizer sidenav row right-aligned ps ps--active-y"
        >
          <div className="col s12">
            {" "}
            <a className="sidenav-close" href="#!">
              <i className="material-icons">close</i>
            </a>
            <h5 className="theme-cutomizer-title">Theme Customizer</h5>
            <p className="medium-small">Customize &amp; Preview in Real Time</p>
            <div className="menu-options">
              <h6 className="mt-6">Menu Options</h6>
              <hr className="customize-devider" />
              <div className="menu-options-form row">
                <div className="input-field col s12 menu-color mb-0">
                  <p className="mt-0">Menu Color</p>
                  <div className="gradient-color center-align">
                    {" "}
                    <span
                      className="menu-color-option gradient-45deg-indigo-blue"
                      data-color="gradient-45deg-indigo-blue"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-purple-deep-orange"
                      data-color="gradient-45deg-purple-deep-orange"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-light-blue-cyan"
                      data-color="gradient-45deg-light-blue-cyan"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-purple-amber"
                      data-color="gradient-45deg-purple-amber"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-purple-deep-purple"
                      data-color="gradient-45deg-purple-deep-purple"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-deep-orange-orange"
                      data-color="gradient-45deg-deep-orange-orange"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-green-teal"
                      data-color="gradient-45deg-green-teal"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-indigo-light-blue"
                      data-color="gradient-45deg-indigo-light-blue"
                    ></span>{" "}
                    <span
                      className="menu-color-option gradient-45deg-red-pink"
                      data-color="gradient-45deg-red-pink"
                    ></span>{" "}
                  </div>
                  <div className="solid-color center-align">
                    {" "}
                    <span
                      className="menu-color-option red"
                      data-color="red"
                    ></span>{" "}
                    <span
                      className="menu-color-option purple"
                      data-color="purple"
                    ></span>{" "}
                    <span
                      className="menu-color-option pink"
                      data-color="pink"
                    ></span>{" "}
                    <span
                      className="menu-color-option deep-purple"
                      data-color="deep-purple"
                    ></span>{" "}
                    <span
                      className="menu-color-option cyan"
                      data-color="cyan"
                    ></span>{" "}
                    <span
                      className="menu-color-option teal"
                      data-color="teal"
                    ></span>{" "}
                    <span
                      className="menu-color-option light-blue"
                      data-color="light-blue"
                    ></span>{" "}
                    <span
                      className="menu-color-option amber darken-3"
                      data-color="amber darken-3"
                    ></span>{" "}
                    <span
                      className="menu-color-option brown darken-2"
                      data-color="brown darken-2"
                    ></span>{" "}
                  </div>
                </div>
                <div
                  className="input-field col s12 menu-bg-color mb-0"
                  style={{ display: "none" }}
                >
                  <p className="mt-0">Menu Background Color</p>
                  <div className="gradient-color center-align">
                    {" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-indigo-blue"
                      data-color="gradient-45deg-indigo-blue"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-purple-deep-orange"
                      data-color="gradient-45deg-purple-deep-orange"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-light-blue-cyan"
                      data-color="gradient-45deg-light-blue-cyan"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-purple-amber"
                      data-color="gradient-45deg-purple-amber"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-purple-deep-purple"
                      data-color="gradient-45deg-purple-deep-purple"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-deep-orange-orange"
                      data-color="gradient-45deg-deep-orange-orange"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-green-teal"
                      data-color="gradient-45deg-green-teal"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-indigo-light-blue"
                      data-color="gradient-45deg-indigo-light-blue"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option gradient-45deg-red-pink"
                      data-color="gradient-45deg-red-pink"
                    ></span>{" "}
                  </div>
                  <div className="solid-color center-align">
                    {" "}
                    <span
                      className="menu-bg-color-option red"
                      data-color="red"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option purple"
                      data-color="purple"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option pink"
                      data-color="pink"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option deep-purple"
                      data-color="deep-purple"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option cyan"
                      data-color="cyan"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option teal"
                      data-color="teal"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option light-blue"
                      data-color="light-blue"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option amber darken-3"
                      data-color="amber darken-3"
                    ></span>{" "}
                    <span
                      className="menu-bg-color-option brown darken-2"
                      data-color="brown darken-2"
                    ></span>{" "}
                  </div>
                </div>
                <div className="input-field col s12">
                  <div className="switch">
                    {" "}
                    Menu Dark
                    <label className="float-right">
                      <input className="menu-dark-checkbox" type="checkbox" />
                      <span className="lever ml-0"></span>
                    </label>
                  </div>
                </div>
                <div className="input-field col s12">
                  <div className="switch">
                    {" "}
                    Menu Collapsed
                    <label className="float-right">
                      <input
                        className="menu-collapsed-checkbox"
                        type="checkbox"
                      />
                      <span className="lever ml-0"></span>
                    </label>
                  </div>
                </div>
                <div className="input-field col s12">
                  <div className="switch">
                    <p className="mt-0">Menu Selection</p>
                    <label>
                      <input
                        className="menu-selection-radio with-gap"
                        value="sidenav-active-square"
                        name="menu-selection"
                        type="radio"
                      />
                      <span>Square</span>{" "}
                    </label>
                    <label>
                      <input
                        className="menu-selection-radio with-gap"
                        value="sidenav-active-rounded"
                        name="menu-selection"
                        type="radio"
                      />
                      <span>Rounded</span>{" "}
                    </label>
                    <label>
                      <input
                        className="menu-selection-radio with-gap"
                        value=""
                        name="menu-selection"
                        type="radio"
                      />
                      <span>Normal</span>{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="mt-6">Navbar Options</h6>
            <hr className="customize-devider" />
            <div className="navbar-options row">
              <div className="input-field col s12 navbar-color mb-0">
                <p className="mt-0">Navbar Color</p>
                <div className="gradient-color center-align">
                  {" "}
                  <span
                    className="navbar-color-option gradient-45deg-indigo-blue"
                    data-color="gradient-45deg-indigo-blue"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-purple-deep-orange"
                    data-color="gradient-45deg-purple-deep-orange"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-light-blue-cyan"
                    data-color="gradient-45deg-light-blue-cyan"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-purple-amber"
                    data-color="gradient-45deg-purple-amber"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-purple-deep-purple"
                    data-color="gradient-45deg-purple-deep-purple"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-deep-orange-orange"
                    data-color="gradient-45deg-deep-orange-orange"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-green-teal"
                    data-color="gradient-45deg-green-teal"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-indigo-light-blue"
                    data-color="gradient-45deg-indigo-light-blue"
                  ></span>{" "}
                  <span
                    className="navbar-color-option gradient-45deg-red-pink"
                    data-color="gradient-45deg-red-pink"
                  ></span>{" "}
                </div>
                <div className="solid-color center-align">
                  {" "}
                  <span
                    className="navbar-color-option red"
                    data-color="red"
                  ></span>{" "}
                  <span
                    className="navbar-color-option purple"
                    data-color="purple"
                  ></span>{" "}
                  <span
                    className="navbar-color-option pink"
                    data-color="pink"
                  ></span>{" "}
                  <span
                    className="navbar-color-option deep-purple"
                    data-color="deep-purple"
                  ></span>{" "}
                  <span
                    className="navbar-color-option cyan"
                    data-color="cyan"
                  ></span>{" "}
                  <span
                    className="navbar-color-option teal"
                    data-color="teal"
                  ></span>{" "}
                  <span
                    className="navbar-color-option light-blue"
                    data-color="light-blue"
                  ></span>{" "}
                  <span
                    className="navbar-color-option amber darken-3"
                    data-color="amber darken-3"
                  ></span>{" "}
                  <span
                    className="navbar-color-option brown darken-2"
                    data-color="brown darken-2"
                  ></span>{" "}
                </div>
              </div>
              <div className="input-field col s12">
                <div className="switch">
                  {" "}
                  Navbar Dark
                  <label className="float-right">
                    <input className="navbar-dark-checkbox" type="checkbox" />
                    <span className="lever ml-0"></span>
                  </label>
                </div>
              </div>
              <div className="input-field col s12">
                <div className="switch">
                  {" "}
                  Navbar Fixed
                  <label className="float-right">
                    <input
                      className="navbar-fixed-checkbox"
                      type="checkbox"
                      checked=""
                    />
                    <span className="lever ml-0"></span>
                  </label>
                </div>
              </div>
            </div>
            <h6 className="mt-6">Footer Options</h6>
            <hr className="customize-devider" />
            <div className="navbar-options row">
              <div className="input-field col s12">
                <div className="switch">
                  {" "}
                  Footer Dark
                  <label className="float-right">
                    <input className="footer-dark-checkbox" type="checkbox" />
                    <span className="lever ml-0"></span>
                  </label>
                </div>
              </div>
              <div className="input-field col s12">
                <div className="switch">
                  {" "}
                  Footer Fixed
                  <label className="float-right">
                    <input className="footer-fixed-checkbox" type="checkbox" />
                    <span className="lever ml-0"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*  <div className="ps__rail-x" style={{'left: 0px; bottom: 0px;'}}>
      <div className="ps__thumb-x" tabindex="0" style={{'left: 0px; width: 0px;'}}></div>
    </div>
    <div className="ps__rail-y" style={{'top: 0px; height: 789px; right: 0px;'}}>
      <div className="ps__thumb-y" tabindex="0" style={{'top: 0px; height: 564px;'}}></div>
    </div> */}
        </div>
        {/*   <!--/ Theme Customizer --> 
  
  <!-- BEGIN: Footer-->  */}
      </div>
    </>
  );
}

export default New_Schedule;
