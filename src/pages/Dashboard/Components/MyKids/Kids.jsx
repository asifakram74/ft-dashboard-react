/** @format */

import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import EnrolleErrorImg from "../../../../assets/images/icon/error-icon.svg";
import WarningImg from "../../../../assets/images/icon/warning-illustration.svg";
// import RightError from "../../../../assets/images/icon/RightArrow-1.svg";
import RightError from "../../../../assets/images/icon/RightArrowBlue.svg";

import MaleAvatar from "../../../../assets/images/icon/avatar-male.svg";
import FemaleAvatar from "../../../../assets/images/icon/female-avatar2.svg";
import { Link } from "react-router-dom";
import { stringToLowercase } from "../../../../shared/utility";
import { useDispatch } from "react-redux";
import { SET_CHILD_ID } from "../../../../store/dashboard/home/constants";
import { history } from "../../../../configs/history";
const KidsInfo = (props) => {
	return (
		<>
			<span>
				<img src={props.img} alt="" /> {props.title}
			</span>
		</>
	);
};

const Kids = (props) => {
	const { kid, index } = props;
	const [warningAlert, setWarningAlert] = useState(false);
	const [deviceToLowercase, setDeviceToLowercase] = useState("");
	const dispatch = useDispatch();
	const clickHandler = (e, child_id) => {
		dispatch({ type: SET_CHILD_ID, data: child_id });
		localStorage.setItem("child_id", child_id);
		history.push("/kid_dashboard");
	};
	useEffect(() => {
		setDeviceToLowercase(stringToLowercase(kid.device_info.device));
	}, ["", kid]);
	return (
		<>
			<li
				className="home-mykid mb-1"
				key={kid.device_info.child_id}
				onClick={
					deviceToLowercase === "iphone" && kid.device_info.child_enrolled === 0
						? () => setWarningAlert(true)
						: (e) => clickHandler(e, kid.device_info.child_id)
				}>
				<div className="row container d-flex align-items-center m-0 p-0">
					<div className="col s2 m2 l2 pb-2 avarter-icon">
						<img
							src={
								stringToLowercase(kid.device_info.gender) === "male"
									? MaleAvatar
									: FemaleAvatar
							}
							alt=""
						/>
						{deviceToLowercase === "iphone" &&
							kid.device_info.child_enrolled === 0 && (
								<span className="imgicon">
									<img src={EnrolleErrorImg} alt="" />
								</span>
							)}
					</div>
					<div className="col s10 m10 l10 pb-2 user-detail invite">
						<h5 className="card-title activator grey-text text-darken-4">
							{kid.device_info.name}
						</h5>

						{kid.device_info.active === 1 ? (
							<div className="kids_bottom">
								<KidsInfo
									img="/images/icon/applimit.svg"
									title="95% Remaining"
								/>
								<KidsInfo
									img="/images/icon/internet-filter-2.svg"
									title="Filtering"
								/>
							</div>
						) : (
							<span className="active_child">Activate Now!</span>
						)}
						{/* <Link to="/kid_dashboard" className="invite_arrow_right top-5"> */}
						<div className="invite_arrow_right top-5">
							<img src={RightError} alt="" />
						</div>
						{/* </Link> */}
					</div>
				</div>
			</li>
			{/* Sweet Alert (POPUP) */}
			<div className="swal_al">
				<SweetAlert
					custom
					show={warningAlert}
					title="Warning!"
					onConfirm={() => setWarningAlert(false)}
					onCancel={() => setWarningAlert(false)}
					confirmBtnText="OK"
					customIcon={WarningImg}
					customClass="sweet_alert">
					<div className="swt_alert">
						<p>Child Device is not enrolled.</p>
					</div>
				</SweetAlert>
			</div>
		</>
	);
};

export default Kids;
