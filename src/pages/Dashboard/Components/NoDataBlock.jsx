/** @format */

import React from "react";
import Card from "../../../components/globalComponents/Card";

const NoDataBlock = (props) => {
	const { img, text, subtitle } = props;
	return (
		<Card
			mainClass=" list-style-n emtynotifi"
			childClass="invite_parent_image pt-2 pb-2">
			<img src={img} alt="" />
			<p>{text}</p>
			{subtitle && <h5>{subtitle}</h5>}
		</Card>
	);
};

export default NoDataBlock;
