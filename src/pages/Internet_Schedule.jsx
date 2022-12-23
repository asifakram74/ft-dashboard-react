import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toptitle from "../components/globalComponents/Toptitle";
import ind_Schedule from "../components/Ind_Schedule";
import Layout from "../components/globalComponents/Layout";

toast.configure();
function Internet_Schedule() {
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
              <div className="section schedule_main">
                <Toptitle backurl="#" title="Internet Schedule" />

                <ind_Schedule> </ind_Schedule>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Internet_Schedule;
