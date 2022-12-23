import React from "react";

const Anchor = (props) => {
  return (
    <div>
      <a href={props.url}> {props.title}</a>
    </div>
  );
};

export default Anchor;
