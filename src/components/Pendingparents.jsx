import React from "react";

function Pendingparents(props) {
  return (
    <>
      <li>
        <div className="collapsible-header" tabIndex="0">
          <div className="row container d-flex align-items-center">
            <div className="col s2 m2">
              <img src={props.img} alt="" />
            </div>
            <div className="col s10 m10 user-detail invite">
              <h5 className="card-title activator grey-text text-darken-4">
                {props.name}
              </h5>
              <p>{props.email}</p>
              <span className="yellow_tag">{props.status}</span>
              <a href="/" className="invite_arrow_right top-15">
                <img src="/images/icon/right-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <div className="row">
            <div className="col s12 m6 l6">
              <a
                href="/"
                className="forget_me_btn no-shadow remove_from_family"
              >
                Revoke
              </a>
            </div>

            <div className="col s12 m6 l6">
              <a href="/" className="update_btn invitation_sent">
                Resend
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Pendingparents;
