/** @format */

import React, { useState } from "react";
import Card from "../../../../components/globalComponents/Card";
import Loader from "../../../../components/globalComponents/Loaders/Loader";
import NoDataBlock from "../NoDataBlock";
import Kids from "./Kids";
const MyKids = (props) => {
	const { kids } = props;
	// console.log("homeResponse", homeResponse);
	const [toggle, setToggle] = useState(false);
	const [arrowToggle, setArrowToggle] = useState(true);
	function renderItems(list) {
		if (list && list.length > 0) {
			if (list.length > 3 && toggle === false) {
				return renderList(list.slice(0, 3));
			} else if (list.length > 3 && toggle === true) {
				return renderList(list);
			} else if (list.length <= 3) {
				return renderList(list, false);
			}
		} else {
			return (
				<NoDataBlock
					img="/images/icon/home_notification.svg"
					text="No Kids show in your List"></NoDataBlock>
			);
		}
	}

	function renderList(list, showButton = true) {
		return (
			<>
				<ul className="home-kids-sec">
					<Card>
						{list.map((item, index) => (
							<Kids kid={item} index={index} key={index} />
						))}

						{showButton && (
							<div>
								<button className="see_more" onClick={toggleHandler}>
									{arrowToggle ? (
										<img src="/images/icon/bottom-arrow.svg" alt="" />
									) : (
										<img src="/images/icon/up-arrow.svg" alt="" className="" />
									)}
								</button>
							</div>
						)}
					</Card>
				</ul>
			</>
		);
	}

	const toggleHandler = () => {
		setToggle((prev) => !prev);
		setArrowToggle((prev) => !prev);
	};

	return <div>{renderItems(kids)}</div>;
	// return (<> {homeResponse.isSuccess ? (
	//   renderItems(homeResponse.data.devices)) : <Loader/>})</>
	// return (
	//   <>
	//     {homeResponse.data.isSuccess ? (
	//       renderItems(homeResponse.data.devices)
	//     ) : (
	//       <Loader />
	//     )}
	//   </>
	// );
};

export default MyKids;
