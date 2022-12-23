/** @format */
import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Card from "../../../../../components/globalComponents/Card";
import Item from "../../Globel/Item";
import {
	kidsWatchlist,
	kidControllist,
	kidsNotificationslist,
	kidsDevicelist,
	kidDeletelist,
} from "../../../../../constants/ViewLists";
import Maintitle from "../../../../../components/globalComponents/Maintitle";
import SweetAlert from "react-bootstrap-sweetalert";
import {
	Button,
	Checkbox,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import SaveIcon from "../../../../../assets/images/icon/save-butn-tab.svg";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
const Controls = () => {
	const [removeKid, setRemovekid] = useState(false);

	return (
		<div className="list-item">
			<Maintitle title="FamilyCare" />

			<Card>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="">
							<List>
								{kidControllist.map((item) => {
									return (
										<Item
											icon={item.image}
											title={item.title}
											description={item.description}
											rightIcon={item.icon}
											url={item.url}
										/>
									);
								})}
							</List>
						</div>
					</Grid>
				</Grid>
			</Card>

			<div className="row main-title w-100 familycare-top">
				<div className="col s8 m6">
					<h3>FamilyCare</h3>
				</div>
				<div className="col s6 m6 l6 right-align">
					<button>
						<img src="/images/icon/save-butn-tab.svg" alt="" />
					</button>
				</div>
			</div>

			{/* <Maintitle title="FamilyCare" icon="/images/icon/save-butn-tab.svg" /> */}

			<Card mainClass="familycare">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="list-mui orange-checkbox">
							<List>
								<ListItem>
									<ListItemAvatar>
										<img src="/Images/icon/calls.svg" alt="Calls" />
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Calls"
										secondary="Enable & disable calls"
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" className="checkbox-mui">
											<Checkbox
												icon={<CircleUnchecked />}
												checkedIcon={<CircleCheckedFilled />}
												name="test"
											/>
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>

								<ListItem>
									<ListItemAvatar>
										<img
											src="/Images/icon/text_messages_ico.svg"
											alt="Text Messages"
										/>
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Text Messages"
										secondary="Enable & disable text messages"
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" className="checkbox-mui">
											<Checkbox
												icon={<CircleUnchecked />}
												checkedIcon={<CircleCheckedFilled />}
												name="test"
											/>
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>

								<ListItem>
									<ListItemAvatar>
										<img src="/Images/icon/contacts.svg" alt="Contacts" />
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Contacts"
										secondary="Enable & disable contacts"
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" className="checkbox-mui">
											<Checkbox
												icon={<CircleUnchecked />}
												checkedIcon={<CircleCheckedFilled />}
												name="test"
											/>
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>

								<ListItem>
									<ListItemAvatar>
										<img
											src="/Images/icon/locations -ico.svg"
											alt="Locations"
										/>
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Locations"
										secondary="Enable & disable locations"
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" className="checkbox-mui">
											<Checkbox
												icon={<CircleUnchecked />}
												checkedIcon={<CircleCheckedFilled />}
												name="test"
											/>
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>

								<ListItem>
									<ListItemAvatar>
										<img src="/Images/icon/apps.svg" alt="Apps" />
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Apps"
										secondary="Enable & disable apps"
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" className="checkbox-mui">
											<Checkbox
												icon={<CircleUnchecked />}
												checkedIcon={<CircleCheckedFilled />}
												name="test"
											/>
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
						</div>
					</Grid>
				</Grid>
			</Card>

			{/* <Maintitle title="Notifications" />

			<Card>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="">
							<List>
								{kidsNotificationslist.map((item) => {
									return (
										<Item
											icon={item.image}
											title={item.title}
											description={item.description}
											rightIcon={item.icon}
										/>
									);
								})}
							</List>
						</div>
					</Grid>
				</Grid>
			</Card> */}

			{/* <Maintitle title="Device" />

			<Card>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="">
							<List>
								{kidsDevicelist.map((item) => {
									return (
										<Item
											icon={item.image}
											title={item.title}
											description={item.description}
											rightIcon={item.icon}
										/>
									);
								})}
							</List>
						</div>
					</Grid>
				</Grid>
			</Card> */}

			<Card>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="">
							<List onClick={() => setRemovekid(true)}>
								<ListItem>
									<ListItemAvatar>
										<img src="/Images/icon/delete-icon.svg" alt="Delete" />
										{/* <img src={props.image} alt={props.title} /> */}
									</ListItemAvatar>

									<ListItemText
										primary="Delete"
										secondary="Delete this child from 'MyKids'"
									/>
									<ListItemSecondaryAction></ListItemSecondaryAction>
								</ListItem>
							</List>
						</div>
					</Grid>
				</Grid>
			</Card>

			<div className="swal_al">
				<SweetAlert
					custom
					show={removeKid}
					title="Delete Child ?"
					// onConfirm={() => removeKid(data.user_id)}
					// onConfirm={() => removeKid(false)}

					onCancel={() => setRemovekid(false)}
					confirmBtnText="Yes"
					customIcon="/Images/icon/delete-illust.svg"
					customClass="sweet_alert remove_family "
					showCancel={true}
					cancelBtnText="No">
					<div className="swt_alert">
						<p>Do you want to delete this child "John Doe" from mykids?</p>
					</div>
				</SweetAlert>
			</div>
		</div>
	);
};

export default Controls;
