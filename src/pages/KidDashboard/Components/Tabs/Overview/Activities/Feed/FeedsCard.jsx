import React from 'react';

function FeedsCard(props) {
  return (
    <>
      <li className="notifications mb-1">
        <div>
          <div className="row container d-flex align-items-center">
            <div className="col s2 m2 pb-2 right-img">
              <img src={props.item.img} alt="" />
            </div>
            <div className="col s10 m10 mr-0 pb-2  user-detail invite border1px pr-0">
              <div>
                <h5 className="card-title activator grey-text text-darken-4 mt-0 ">
                  {props.item.name}
                </h5>
                <h6>
                  {props.item.feedtext1}
                  <span>
                    <img src={props.item.belowicon} alt="" />
                  </span>
                  <span>{props.item.feedtext2}</span>
                </h6>
              </div>

              <a href="/" className="invite_arrow_right top-5">
                <h6 className="span">{props.item.feedtime}</h6>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default FeedsCard;
