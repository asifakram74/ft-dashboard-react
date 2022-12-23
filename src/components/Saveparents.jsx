import React from "react";

function Parent(props) {
  const { data } = props;
  return (
    <>
      <li>
        <div className="collapsible-header" tabIndex="0">
          <div className="row container d-flex align-items-center">
            <div className="col s2 m2  text-center">
              <img
                src={
                  data.gender === "male"
                    ? "images/icon/avatar-male.svg"
                    : "images/icon/female-avatar2.svg"
                }
                alt=""
              />
            </div>
            <div className="col s10 m10 user-detail invite">
              <h5 className="card-title activator grey-text text-darken-4">
                {data.name}
              </h5>
              <p>{data.email}</p>
              {data.active === 0 && <span className="yellow_tag">Pending</span>}
              <a href="/" className="invite_arrow_right">
                <img src="/images/icon/right-arrow.svg" alt="" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <form action="#">
            <div className="row">
              <div className="col s8 m8 l8">
                <h3 className="parent_heading">Allow To Add Devices</h3>
              </div>
              <div className="col s4 m4 l4">
                <p>
                  <label className="checkbox_blue right">
                    <input type="checkbox" className="filled-in" />
                    <span>&nbsp;</span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s8 m8 l8">
                <h3 className="parent_heading">Push Notification</h3>
              </div>
              <div className="col s4 m4 l4">
                <p>
                  <label className="checkbox_green right">
                    <input type="checkbox" className="filled-in" />
                    <span>&nbsp;</span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s8 m8 l8">
                <h3 className="parent_heading">Email Notification</h3>
              </div>
              <div className="col s4 m4 l4">
                <p>
                  <label className="checkbox_purpal right">
                    <input type="checkbox" className="filled-in" />
                    <span>&nbsp;</span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s8 m8 l8">
                <h3 className="parent_heading">Product Updates</h3>
              </div>
              <div className="col s4 m4 l4">
                <p>
                  <label className="checkbox_yellow right">
                    <input type="checkbox" className="filled-in" />
                    <span>&nbsp;</span>
                  </label>
                </p>
              </div>
            </div>

            <div className=" row mt-5">
              <div className="col s12 m6 l6">
                <a
                  href="/"
                  className="forget_me_btn no-shadow remove_from_family"
                >
                  Remove
                </a>
              </div>

              <div className="col s12 m6 l6">
                <a href="/" className="update_btn save_family">
                  Save
                </a>
              </div>
            </div>
          </form>
        </div>
      </li>
    </>
  );
}

export default Parent;
