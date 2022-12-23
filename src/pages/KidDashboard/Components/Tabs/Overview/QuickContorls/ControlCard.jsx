/** @format */

import React from "react";
// console.log(props.toggleHandler);
const ControlCard = (props) => {
	return (
		<div>
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
		</div>
	);
};

export default ControlCard;
