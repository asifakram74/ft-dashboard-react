/** @format */

import React from "react";
// import ProgressBar2 from "./Header/progressBar2";
// import ProgressBar from "./Header/ProgressBar";

const KidsInfo = (props) => {
	return (
		<>
			<span>
				<img src={props.img} alt="" /> {props.title}
			</span>
		</>
	);
};
const ChildHeader = (props) => {
	const { data } = props;
	return (
		<div>
			<div className="progress_child">
				{/* <ProgressBar2 data={data} /> */}
				{/* <ProgressBar /> */}

				<div>
					<h2>{data.name}</h2>
					<h5>{data.device_name}</h5>
					<div className="kids_bottom">
						<KidsInfo
							img="/images/icon/applimit_white.svg"
							title="95% Remaining"
						/>
						<KidsInfo
							img="/images/icon/internet-filter_white.svg"
							title="Filtering"
						/>
						<KidsInfo img="/images/icon/bedtime_white.svg" title="Activated" />
						<KidsInfo img="/images/icon/funtime2_white.svg" title="Activated" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChildHeader;
