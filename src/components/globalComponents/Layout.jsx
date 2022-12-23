/** @format */

import React from "react";
import Sidebar from "./Sidebar";
// import "../../assets/css/test.css";
function Layout(props) {
	const bgColor = props.bgColor ? props.bgColor : "";
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<>
			<Sidebar title={props.title} />
			<div id="main" className={`${mainClass}`}>
				<div className="row body_row" style={{ background: bgColor }}>
					{/* <div className="col s12 m2 l2">&nbsp;</div> */}
					<div className="col s12 m10 l8 ds_layout">
						<div className="container">
							<div className="section ">
								{props.children}

								{/* <h6 className="testss">asdsad asd sad asd</h6> */}
							</div>

							<div className="content-overlay"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Layout;
