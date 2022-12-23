/** @format */

import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

const Modals = () => {
	const [newEmail, setnewEmail] = useState(false);

	const reSendmail = (e) => {
		e.preventDefault();
		setnewEmail(true);
	};

	const onClose = () => {
		setnewEmail(false);
	};
	//Button Click Function
	return (
		<>
			<a href="/" onClick={reSendmail}>
				Resend
			</a>
			{/* Sweet Alert (POPUP) */}
			<div className="swal_al">
				<SweetAlert
					custom
					show={newEmail}
					title="Successful!"
					onConfirm={reSendmail}
					confirmBtnText="OK"
					customIcon="/Images/icon/confirmation-illustration.svg"
					customClass="sweet_alert">
					<div className="swt_alert">
						<p>A verificatin link has been sent to your email address.</p>
					</div>
				</SweetAlert>
				{/* Popup close */}
			</div>
		</>
	);
};
export default Modals;
