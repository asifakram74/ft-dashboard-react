import React from "react";

const Controls = (props) => {
  console.log(props.toggleHandler);
  return (
    <li onClick={props.changeHandler}>
      <div className="text-center controls-icon">
        {props.toggleHandler ? (
          <img src={props.image_true} alt=""></img>
        ) : (
          <img src={props.image_false} alt=""></img>
        )}

        {/* <img src={props.image2} alt=""></img> */}
        <p>{props.title}</p>
      </div>
    </li>
  );
};

export default Controls;
