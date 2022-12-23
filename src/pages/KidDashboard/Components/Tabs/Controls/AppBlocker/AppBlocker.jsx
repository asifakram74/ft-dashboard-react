/** @format */

import {
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../../../../../../components/globalComponents/Layout";
import AppBlockerillustration from "../../../../../../assets/images/icon/appblocker_illustration.svg";
import Card from "../../../../../../components/globalComponents/Card";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import AppblockerCard from "./AppblockerCard";
import Button from "../../../../../../components/globalComponents/Button";
import Tick from "../../../../../../assets/images/icon/Tick-illustration.svg";
import Icon from "../../../../../../assets/images/icon/account-ico-blue.svg";

import SweetAlert from "react-bootstrap-sweetalert";
import TitlewithMenu from "../Component/TitlewithMenu";
import DropDownList from "../Component/DropDownList";

const AppBlocker = () => {
	const [update, setUpdate] = useState(false);
	const [parent, setParent] = useState(false);
	const [parentremove, setParentremove] = useState(false);

	return (
		<div>
			<Layout title="App Blocker " mainClass="newschedule appblocker">
				<Card>
					<img src={AppBlockerillustration} alt="" />
					<List>
						<ListItem>
							<ListItemText
								primary="Enable App Blocker"
								secondary="Block the apps you don’t want to be running on your kids’ devices. "
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
				<Card>
					<div className=" blue-checkbox">
						<h3>Select An Option</h3>
						<div className="dl-flex">
							<h5>Auto Block New Apps</h5>

							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</div>
						<div className="dl-flex ">
							<h5>Ask Me to Approve New Apps</h5>

							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</div>
					</div>
				</Card>

				<Card mainClass="allapps">
					<TitlewithMenu title="All Apps" number="(5)">
						<DropDownList className id="edit" link="/" title="Edit" />
						<DropDownList
							className
							id="delete"
							link="/"
							title="Delete"
							onClick={() => setParentremove(true)}
						/>
					</TitlewithMenu>

					<div className=" listitem blue-checkbox">
						<AppblockerCard image={Icon} title="Adamson">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</AppblockerCard>
						<AppblockerCard image={Icon} title="Adamson">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</AppblockerCard>
						<AppblockerCard image={Icon} title="Adamson">
							<IconButton edge="end" className="checkbox-mui">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleCheckedFilled />}
									name="test"
								/>
							</IconButton>
						</AppblockerCard>
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
						<p>
							Your App Blocker list is updated and setting are saved
							successfully.
						</p>
					</div>
				</SweetAlert>
			</div>
		</div>
	);
};

export default AppBlocker;
