/** @format */

import React, { useState } from "react";
import Card from "../../../../../../components/globalComponents/Card";
import Layout from "../../../../../../components/globalComponents/Layout";
import SingleRoundSlider from "../../../../../Extra/RoundSlider";
import TopCard from "../Component/TopCard";
import Banner from "../../../../../../assets/images/icon/daily-app-limit.svg";
import AppblockerCard from "../AppBlocker/AppblockerCard";
import { Checkbox, IconButton } from "@material-ui/core";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Button from "../../../../../../components/globalComponents/Button";
import DropDownList from "../Component/DropDownList";
import Icon from "../../../../../../assets/images/icon/android-ico-orange.svg";
import TitlewithMenu from "../Component/TitlewithMenu";
import SweetAlert from "react-bootstrap-sweetalert";
import Tick from "../../../../../../assets/images/icon/Tick-illustration.svg";

const AppLimit = () => {
	const [update, setUpdate] = useState(false);

	return (
		<div>
			<Layout title="App Blocker " mainClass="newschedule appblocker">
				<TopCard
					img={Banner}
					title="Enable Daily App Limit
"
					subtile="Set daily time limits on apps for your kid to avoid excessive usage.

"
				/>

				<Card mainClass="applimitcard allapps">
					<h2>Set Daily Usage Limit</h2>
					<SingleRoundSlider></SingleRoundSlider>
					<div className=" listitem orange-checkbox">
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

				<Card mainClass="allapps">
					<TitlewithMenu title="Device App List">
						<DropDownList
							className
							id="edit"
							link="/"
							title="Select All Apps"
						/>
						<DropDownList
							className
							id="delete"
							link="/"
							title="Unselect All Apps"
						/>
					</TitlewithMenu>

					<div className=" listitem orange-checkbox">
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
						<p>Your daily app limit setting is saved.</p>
					</div>
				</SweetAlert>
			</div>
		</div>
	);
};

export default AppLimit;
