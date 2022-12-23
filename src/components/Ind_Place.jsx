import React from "react";

function Place(props) {
  return (
    <>
      <li>
        <div className="collapsible-header" tabIndex="0">
          <div className="row container d-flex align-items-center">
            <div className="col s2 m2">
              <img src={props.img} alt="" />
            </div>
            <div className="col s10 m10 user-detail invite ind_places">
              <h5 className="card-title activator grey-text text-darken-4">
                {props.name}
              </h5>
              <p>{props.address}</p>
              <span className="green_tag">{props.active}</span>
              <span className="red_tag">{props.inactive}</span>
              <a href="/" className="invite_arrow_right top-15">
                <img src="/images/icon/right-arrow.svg" alt="" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <div className="row">
            <div className="col s12 m6 l6">
              <a href="/" className="forget_me_btn no-shadow remove_place">
                Remove
              </a>
            </div>

            <div className="col s12 m6 l6">
              <a href="/" className="update_btn invitation_sent">
                Save
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Place;
