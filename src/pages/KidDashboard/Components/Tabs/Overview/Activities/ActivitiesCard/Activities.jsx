/** @format */

import React from "react";
import ActivityCard from "./ActivityCard";

const Activities = () => {
	return (
		<>
			<ActivityCard
				mainClass="bg1"
				link="/"
				image="/Images/icon/text-messages-purple.svg"
				imagealt="Total Messages"
				title="105"
				subtitle="Total Messages"
				icon="/images/icon/right-arrow-purple.svg"
			/>

			<ActivityCard
				mainClass="bg2"
				link="/"
				image="/Images/icon/caslls_yellow_ico.svg"
				imagealt="Talk Time"
				title="55d"
				subtitle="Talk Time"
				icon="/images/icon/right-arrow-yellow.svg"
			/>

			<ActivityCard
				mainClass="bg3"
				link="/"
				image="/Images/icon/android-ico.svg"
				imagealt="New Apps"
				title="7"
				subtitle="New Apps"
				icon="/images/icon/right-arrow-blue.svg"
			/>

			<ActivityCard
				mainClass="bg4"
				link="/"
				image="/Images/icon/app-usage-green.svg	"
				imagealt="Apps Usage"
				title="17m 30s"
				subtitle="Apps Usage"
				icon="/images/icon/right-arrow-green.svg"
			/>

			<ActivityCard
				mainClass="bg5"
				link="/"
				image="/Images/icon/contacts-red.svg"
				imagealt=""
				title="7"
				subtitle="New Contacts"
				icon="/images/icon/right-arrow-red.svg"
			/>

			<ActivityCard
				mainClass="bg6"
				link="/"
				image="/Images/icon/timebank.svg"
				imagealt=""
				title="105"
				subtitle="Total Messages"
				icon="/images/icon/right-arrow-skyblue.svg"
			/>

			{/* <FamilyFeed />  */}
		</>
	);
};

export default Activities;
