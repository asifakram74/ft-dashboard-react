/** @format */
import React, { useState } from "react";

import {
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import Layout from "../../../../../../components/globalComponents/Layout";
import Watchlist from "../../../../../../assets/images/icon/Contact-watchlist-illustration.svg";
import Search from "../../../../../../assets/images/icon/search.svg";

import Card from "../../../../../../components/globalComponents/Card";
import WatchListCard from "./WatchListCard";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Button from "../../../../../../components/globalComponents/Button";
import SweetAlert from "react-bootstrap-sweetalert";

import Tick from "../../../../../../assets/images/icon/Tick-illustration.svg";

const ContactWatchlist = () => {
	const [update, setUpdate] = useState(false);

	return (
		<div>
			<Layout title="Contact Watchlist " mainClass="newschedule">
				<Card>
					<img src={Watchlist} alt="" />
					<List>
						<ListItem>
							<ListItemText
								primary="Enable Contact Watchlist"
								secondary="Get instent alert when your kids get or make a call to those contacts."
							/>
						</ListItem>
						<ListItemSecondaryAction>
							<div className="text-right notification_date">
								{/* <CheckBox /> */}
								<div className="switch right schedule_toggle">
									<input type="checkbox" id="switch" />
									<label for="switch"></label>
								</div>
							</div>
						</ListItemSecondaryAction>
					</List>
				</Card>
				<Card mainClass="contact-watchlist">
					<div>
						<h5>
							Contacts List <span> (5)</span>
						</h5>
						<div className="search-box">
							<img src={Search} alt="" />

							<input type="text" Placeholder="Search Contacts" />
						</div>
					</div>
					<div className=" listitem purple-checkbox">
						<WatchListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</WatchListCard>
						<WatchListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</WatchListCard>
						<WatchListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</WatchListCard>
					</div>
				</Card>

				<Button type="submit" title="Save" onClick={() => setUpdate(true)} />
			</Layout>

			<div className="swal_al">
				<SweetAlert
					custom
					show={update}
					title="Successful!"
					onConfirm={() => setUpdate(false)}
					onCancel={() => setUpdate(false)}
					confirmBtnText="OK"
					customIcon={Tick}
					customClass="sweet_alert">
					<div className="swt_alert">
						<p>Your contacts settings are saved successfully.</p>
					</div>
				</SweetAlert>
			</div>
		</div>
	);
};

export default ContactWatchlist;
