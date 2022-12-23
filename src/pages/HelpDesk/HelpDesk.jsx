/** @format */

import React from "react";

import Card from "../../components/globalComponents/Card";
import Layout from "../../components/globalComponents/Layout";
import Test from "../../assets/images/icon/helpdesk.svg";
import Chat from "../../assets/images/icon/chat.svg";
import Ticket from "../../assets/images/icon/ticket.svg";
import MyTicket from "../../assets/images/icon/myticket.svg";
import HelpCenter from "../../assets/images/icon/helpcenter.svg";
import Green from "../../assets/images/icon/right-arrow-green.svg";
import Blue from "../../assets/images/icon/RightArrowBlue.svg";
import Purple from "../../assets/images/icon/RightArrowPurple.svg";
import Orange from "../../assets/images/icon/RightArrow-2.svg";

import {
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";

const HelpDeskCard = (props) => {
	return (
		<Card>
			<List>
				<ListItem>
					<ListItemAvatar>
						<img src={props.img} alt={props.title} />
					</ListItemAvatar>
					<ListItemText primary={props.title} />
					<ListItemSecondaryAction>
						<IconButton edge="end">
							<img src={props.icon} alt={props.title} />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		</Card>
	);
};

const HelpDesk = () => {
	return (
		<div>
			<Layout mainClass="helpdesk">
				<div className="topSec">
					<img src={Test} alt="" />
					<h2>Have A Query!</h2>
					<p>We're here to resolve all your queries and problems in a jiff!</p>
				</div>

				<HelpDeskCard img={Ticket} title="Create Ticket" icon={Blue} />
				<HelpDeskCard img={MyTicket} title="My Tickets" icon={Green} />
				<HelpDeskCard img={HelpCenter} title="Help Center" icon={Orange} />
				<HelpDeskCard img={Chat} title="Live Chat" icon={Purple} />
			</Layout>
		</div>
	);
};

export default HelpDesk;
