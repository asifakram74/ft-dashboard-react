/** @format */

import React from "react";
import { Link } from "react-router-dom";
import RightError from "../../../../assets/images/icon/right-arrow-purple2.svg";

function Notification(props) {
	return (
		<>
			<li className="notifications ">
				<div>
					<div className="row container d-flex align-items-center">
						<div className="col s2 m2 pb-2 right-img">
							<img src={props.img} alt="" />
						</div>
						<div className="col s10 m10 mr-0 pb-3 user-detail invite border1px pr-0">
							<Link to={`/notifications/${props.data_id}`}>
								<div className="notifications_content">
									<h5 className="card-title activator grey-text text-darken-4 mt-0 ">
										{props.name}
									</h5>
									<h6> {props.date}</h6>
								</div>
							</Link>
							<a href="/" className="invite_arrow_right top-5">
								<img src={RightError} alt="" />
							</a>
						</div>
					</div>
				</div>
			</li>
		</>
	);
}

export default Notification;
