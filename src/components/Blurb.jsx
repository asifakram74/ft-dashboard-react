import React from "react";

function Blurb(props) {
  return (
    <>
      <li className="collection-item avatar">
        {" "}
        <img src={props.avatar} alt="" className="circle" />
        <h3 className="">{props.title}</h3>
        <p className="medium-small">{props.subtitle}</p>
        <a href={props.link} className="secondary-content">
          <img src={props.icon} alt="" className="right" />
        </a>
      </li>
    </>
  );
}

export default Blurb;
