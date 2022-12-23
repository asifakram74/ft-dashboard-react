import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Layout from "../components/globalComponents/Layout";

const Emptyparent = () => {
  return (
    <>
      <Layout></Layout>
      <div id="main">
        <div className="row">
          <div className="col s12 m12 l2">&nbsp;</div>
          <div className="col s12 m10 l8">
            <div className="container">
              <div className="section"></div>
              <Toptitle backurl="#" title="Parents" />

              <div className="row">
                <div className="col s12 m12 l12 invite_parent_image">
                  <img src="/images/icon/invite.svg" alt="" />
                  <p>
                    No co-parent or guardian invited yet.
                    <br />
                    Tap “<font color="#008CFF">Invite</font>” Button to send
                    them invitation.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <ul className="collapsible collapsible-accordion parent_according">
                    <div className="row">
                      <div className="col s12 m12 l12 emptyemail">
                        <a className="update_btn" href="#!">
                          Invite Parent
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emptyparent;
