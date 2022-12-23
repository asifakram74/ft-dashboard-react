import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Layout from "../components/globalComponents/Layout";
import Card from "../components/globalComponents/Card";

const Invitenotification = () => {
  return (
    <>
      <Layout title="Invite Parents">
        {/* <div className="card raduse-12 my-shadow m-2">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m12 l12 invite_parent_image inner another"> */}
        <Card mainClass="m-2" childClass="invite_parent_image inner another">
          <img src="/images/icon/invite sent-success.svg" alt="" />
          <p>
            Invitation sent to "<font color="#008CFF">janedoe@email.com</font>"
            <br />
            Please ask them to verify and create the FamilyTime account, so
            <br />
            that they can manage kids from their device.
          </p>

          <form className="invite_form">
            <div className="row">
              <div className="col s12 m12 l12">
                <a className="update_btn" href="invite-parents.html">
                  Send Another Invitation
                </a>
              </div>
            </div>
          </form>
        </Card>
        {/* </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Invitenotification;
