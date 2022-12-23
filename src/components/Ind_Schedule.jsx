import React from "react";

function ind_Schedule(props) {
  return (
    <>
      <div className="card raduse-12 my-shadow">
        <div className="card-content schedule_inner">
          <div className="row">
            <div className="col s12 m12 l12">
              <ul className="collection no-border daily_app_limit_list">
                <li className="collection-item avatar">
                  <img src={props.img} alt="" className="circle" />
                  <h3 className="">{props.title}</h3>
                  <a
                    className="waves-effect waves-block waves-light profile-button secondary-content right"
                    href="javascript(0)"
                    data-target="list-dropdown"
                  >
                    <img src="/images/icon/drop-down-icon.svg" alt="" />
                  </a>
                </li>
              </ul>
              <ul className="dropdown-content" id="list-dropdown">
                <li>
                  <a className="grey-text text-darken-1" href="javascrip(0);">
                    {" "}
                    Edit
                  </a>
                </li>
                <li>
                  <a className="grey-text text-darken-1" href="javascrip(0);">
                    {" "}
                    Delete
                  </a>
                </li>
              </ul>
              <div className="col s9 m9 l9">
                <h3 className="">Internet allowance</h3>
              </div>
              <div className="switch right schedule_toggle inner">
                <input type="checkbox" id="switch" />
                <label htmlFor="switch"></label>
              </div>
            </div>
            <div className="card-content internet_schedule add_schedule pb-0">
              <div className="row border_botoom">
                <div className="col s12 m12 l6">
                  <h4 className="slider-time">
                    1:00 AM <span> - </span>9:30 PM
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="  "></div>
                </div>
              </div>

              <div className="row">
                <div className="col s12 m12 l12">
                  <ul className="weekdays">
                    <li>
                      <a
                        href="/"
                        className="days_select active"
                        onClick="return false;"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="days_select active"
                        onClick="return false;"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="days_select active"
                        onClick="return false;"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="days_select active"
                        onClick="return false;"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="days_select active"
                        onClick="return false;"
                      >
                        {" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ind_Schedule;
