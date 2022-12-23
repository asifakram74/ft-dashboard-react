import React from "react";
function Toptitle(props) {
  // const icon = props.icon === "" && "/images/icon/arrow-left.svg";
  const icon = !props.icon ? "/images/icon/arrow-left.svg" : "";
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <div className="card raduse-12 my-shadow m-2">
        <div className="card-content">
          <div className="row">
            <div className="col s12 m12 l12">
              <h2 className="heading_sub">
                <a href={props.backurl} onClick={goBack}>
                  <img src={icon} alt="" />
                </a>{" "}
                {props.title}
                <a href={props.righturl} className="invite_parent">
                  {props.righttxt}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toptitle;
