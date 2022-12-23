import React from "react";
import Toptitle from "../components/globalComponents/Toptitle";
import Place from "./../components/Ind_Place";
import Layout from "../components/globalComponents/Layout";
import Button from "../components/globalComponents/Button";

const Places = () => {
  return (
    <>
      <Layout></Layout>
      <div id="main">
        <div className="row">
          <div className="col s12 m12 l2">&nbsp;</div>
          <div className="col s12 m10 l8">
            <div className="container">
              <div className="section"></div>
              <Toptitle backurl="#" title="Places (Geo-Fence)          " />

              <div className="row">
                <div className="col s12">
                  <ul className="collapsible collapsible-accordion parent_according">
                    <Place
                      name="Location ABC"
                      img="/images/icon/female-avatar.svg"
                      address="Street 123, Block A, somewhere in  London"
                      active="Active"
                      inactive=""
                    />

                    <Place
                      name="Location ABC"
                      img="/images/icon/female-avatar.svg"
                      address="Street 123, Block A, somewhere in  London"
                      active="Active"
                    />

                    <Place
                      name="Location ABC"
                      img="/images/icon/female-avatar.svg"
                      address="Street 123, Block A, somewhere in  London"
                      inactive="Inactive"
                    />

                    <Place
                      name="Location ABC"
                      img="/images/icon/female-avatar.svg"
                      address="Street 123, Block A, somewhere in  London"
                      statusa=""
                      inactive="Inactive"
                    />

                    <Button url="http://" title="Add New Place" />
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

export default Places;
