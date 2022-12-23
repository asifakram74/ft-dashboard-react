import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Button from "../components/globalComponents/Button";
import Layout from "../components/globalComponents/Layout";

function Internet_Filters() {
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
                <Toptitle backurl="#" title="Internet Filters" />

                <div className="card raduse-12 my-shadow">
                  <div className="card-content schedule_inner">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <div className="col s9 m9 l9">
                          <h3 className="">Enable Internet Filters</h3>
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

                <div className="card raduse-12 my-shadow">
                  <div className="card-content internet_filter_list">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            <img
                              src="/images/icon/safe-search-instance.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">SafeSearch</h3>
                            <p className="medium-small">
                              It filters adult, pornographic and explicit sites
                              search.
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_bluetwo right">
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
                  <div className="card-content internet_filter_list">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            <img
                              src="/images/icon/Pronography-icon-instance.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Pornography</h3>
                            <p className="medium-small">
                              Blocks access to all 18+/mature content websites.
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_pinktwo right">
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
                  <div className="card-content internet_filter_list">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            <img
                              src="/images/icon/drugs-icon-instance.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Drugs/Abortion</h3>
                            <p className="medium-small">
                              It blocks the websites which contain drugs and
                              abortion related content.
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
                  <div className="card-content internet_filter_list">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="collection mb-0 setting_list no-border">
                          <li className="collection-item avatar">
                            <img
                              src="/images/icon/dating--gambling---icon-instance.svg"
                              alt=""
                              className="circle"
                            />
                            <h3 className="">Dating/Gambling</h3>
                            <p className="medium-small">
                              It filters adult, pornographic and explicit sites
                              search.
                            </p>
                            <a href="#!" className="secondary-content">
                              <label className="checkbox_bluetwo right">
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

                <Button url="#" title="Save" img="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Internet_Filters;
