import React from "react";

const Input = (props) => {
  const type = props.type || "text";

  return (
    <div>
      <div className="row margin">
        <div className="input-field col s12">
          <img src={props.icon} alt={props.icon_alt} className="prefix pt-2" />
          <input
            id={props.name}
            name={props.name}
            type={props.type}
            // value={props.value}
            onChange={props.changed}
            className={props.className}
            ref={props.registered}
            {...props}
          />
          <label htmlFor={props.name} className={props.lableclass}>
            {props.label}
          </label>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Input;
