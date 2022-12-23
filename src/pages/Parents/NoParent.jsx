/** @format */

import React from "react";
import _ from "lodash";
import NoDataBlock from "../Dashboard/Components/NoDataBlock";
import Button from "../../components/globalComponents/Button";

const NoParent = (props) => {
	return (
		<>
			<div className="invite_parent_empty">
				<NoDataBlock
					img="/images/icon/invite.svg"
					text={[
						"No co-parent or guardian invited yet.",
						<br />,
						"Tap ",
						<font color="#008CFF">"Invite"</font>,
						" Button to send them invitation.",
					]}></NoDataBlock>
			</div>

			<Button onClick={props.redirectToInvite} title="Invite Parent" />
		</>
	);
};

export default NoParent;
