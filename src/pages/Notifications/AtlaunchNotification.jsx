/** @format */

import React, { useEffect } from "react";
import Button from "../../components/globalComponents/Button";
import Layout from "../../components/globalComponents/Layout";
import { store } from "../../store/configureStore";
import _ from "lodash";
const AtlaunchNotification = (props) => {
	const handleToggle = () => {
		store.dispatch({ type: "NOTIFICATION_ATLAUNCH_TOGGLE" });
	};
	const language = localStorage.getItem("i18nextLng");
	const { data } = props;
	const feed_data = _.get(data, "feed_data", {});
	const feedData = JSON.parse(feed_data);
	//background
	const bgColor = _.get(feedData, "[0].bgColor", "");
	//Header
	const topTitle = _.get(feedData, "[1].data", "");
	const topTitleTextAlignment = _.get(feedData, "[1].textAlignment", "center");
	//Para
	const topParagraph = _.get(feedData, "[2].data", "");
	const topParagraphFontSize = _.get(feedData, "[2].fontSize", "16px");
	const topParagraphTextColor = _.get(feedData, "[2].textColor", "#000000");
	const topParagraphAlignment = _.get(feedData, "[2].textAlignment", "center");
	const topParagraphTopMargin = _.get(feedData, "[2].topMargin", "");
	//Image
	const image = _.get(feedData, "[3].tabletUrl", "");
	//Coupon Code
	const coupon = _.get(feedData, "[4].data", "");
	const couponAlign = _.get(feedData, "[4].textAlignment", "center");
	const couponTopMargin = _.get(feedData, "[4].topMargin", "");
	const couponParagraphTextColor = _.get(feedData, "[4].textColor", "#000000");
	// footer part
	const bottomParagraph = _.get(feedData, "[5].data", "");
	const bottomTextAlign = _.get(feedData, "[5].textAlignment", "center");
	const bottomTextColor = _.get(feedData, "[5].textColor", "#000000");
	const bottomParagraphTopMargin = _.get(feedData, "[5].topMargin", "");
	const bottomParagraphFontSize = _.get(feedData, "[5].fontSize", "16px");

	//Button
	const buttonTitle = _.get(feedData, "[6].data", "View");
	const buttonBgColor = _.get(feedData, "[6].bgColor", "");
	const buttonTextColor = _.get(feedData, "[6].textColor", "#000000");

	return (
		<>
			<Layout bgColor={bgColor}>
				{props.close && (
					<div className="topclose">
						<button className="btn-no-border" onClick={handleToggle}>
							<img src="/images/icon/close.svg" alt="" />
						</button>
					</div>
				)}

				<div className="nfbody">
					<h3 style={{ textAlign: topTitleTextAlignment }}>{topTitle}</h3>
					<p
						style={{
							color: topParagraphTextColor,
							textAlign: topParagraphAlignment,
							marginTop: topParagraphTopMargin,
							fontSize: topParagraphFontSize,
						}}>
						{topParagraph}
					</p>

					<img className="width-100" src={image} alt="" />

					<h4
						style={{
							textAlign: couponAlign,
							marginTop: couponTopMargin,
							color: couponParagraphTextColor,
						}}>
						{coupon}
					</h4>

					<p
						style={{
							textAlign: bottomTextAlign,
							color: bottomTextColor,
							marginTop: bottomParagraphTopMargin,
							fontSize: bottomParagraphFontSize,
						}}>
						{bottomParagraph}
					</p>

					<Button
						style={{
							background: buttonBgColor,
							border: buttonBgColor,
							color: buttonTextColor,
						}}
						url="#"
						title={buttonTitle}
					/>
				</div>
			</Layout>
		</>
	);
};

export default AtlaunchNotification;
