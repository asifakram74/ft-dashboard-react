/** @format */

import React, { useState } from "react";
import FeedsCard from "./FeedsCard";

const Activitieslogs = () => {
	const feeds = [
		{
			name: "Installed new app ",
			img: "/images/icon/android-ico.svg",
			feedtext1: "Facebook | Jack Doe",
			feedtime: "5s ago",
		},
		{
			name: "Location update",
			img: "/images/icon/location_simple_icon.svg",
			feedtext1: "Suzy",
			feedtime: "1min ago",
		},
		{
			name: "Check-in",
			img: "/images/icon/checkin_icon.svg",
			feedtext1: "Jack Doe",
			feedtime: "1h ago",
		},
		{
			name: "Called",
			img: "/images/icon/caslls_ico.svg",
			feedtext1: "Suzy  ",
			belowicon: "/images/icon/feedmessage.svg",
			feedtext2: "+1-202-555-0187",
			feedtime: "1.5h ago",
		},
		{
			name: "Installed new app ",
			img: "/images/icon/android-ico.svg",
			feedtext1: "Facebook | Jack Doe",
			feedtime: "5s ago",
		},
		{
			name: "Location update",
			img: "/images/icon/location_simple_icon.svg",
			feedtext1: "Suzy",
			feedtime: "1min ago",
		},
		{
			name: "Check-in",
			img: "/images/icon/checkin_icon.svg",
			feedtext1: "Jack Doe",
			feedtime: "1h ago",
		},
		{
			name: "Called",
			img: "/images/icon/caslls_ico.svg",
			feedtext1: "Suzy  ",
			belowicon: "/images/icon/feedmessage.svg",
			feedtext2: "+1-202-555-0187",
			feedtime: "1.5h ago",
		},
	];
	const [toggle, setToggle] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(true);
	function renderItems(list) {
		if (list && list.length > 0) {
			if (list.length > 6 && toggle === false) {
				return renderList(list.slice(0, 6), "Show More");
			} else if (list.length > 6 && toggle === true) {
				return renderList(list, "Show Less");
			} else if (list.length <= 6) {
				return renderList(list, "", false);
			}
		}
	}
	function renderList(list, buttonText, showButton = true) {
		return (
			<>
				<div className="homefeedbar">
					<div className="list-style-n feed-bar">
						{list.map((item, index) => (
							<FeedsCard item={item} index={index} />
						))}
						{showButton && (
							<div className="text-center">
								<button href="#" onClick={toggleHandler} className="see_more">
									{arrowToggle ? (
										<img src="/images/icon/bottom-arrow.svg" alt="" />
									) : (
										<img src="/images/icon/up-arrow.svg" alt="" />
									)}
								</button>
							</div>
						)}
					</div>
				</div>
			</>
		);
	}

	const toggleHandler = () => {
		setToggle((prev) => !prev);
		setArrowToggle((prev) => !prev);
	};

	return <>{renderItems(feeds)} </>;
};

export default Activitieslogs;
