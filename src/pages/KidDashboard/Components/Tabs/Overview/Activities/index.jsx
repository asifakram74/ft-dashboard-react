/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Activitieslogs from "./Feed/Avtivitieslogs";
import Activities from "./ActivitiesCard/Activities";
import Card from "../../../../../../components/globalComponents/Card";
import SingleLocator from "../../../Maps/SingleLocator";

const index = (props) => {
	const { data } = props;
	return (
		<>
			<div className="childsummery">
				<Card>
					<div className="child_activitycard">
						<Typography component="p">Summary</Typography>
					</div>
					<Grid container direction="row" justify="center" alignItems="center">
						<Activities />
						<Grid item xs={12} sm={12}>
							<div className="activiteslog">
								<div className="child_activitycard">
									<Typography component="p">Activity Logs</Typography>
								</div>
								<Activitieslogs />
							</div>
						</Grid>
						<Grid item xs={12} sm={12}>
							<div className="activiteslog">
								<div className="child_activitycard">
									<Typography component="p">Current Location</Typography>
								</div>
								<div>
									<SingleLocator
										// zoom={16}
										data={data}
										lat={31.5315}
										lng={74.3529}
										// height="136px"
										// width="100wh"
									/>
								</div>
								{/* <Activitieslogs /> */}
							</div>
						</Grid>
					</Grid>
					{/* <FamilyFeed />  */}
				</Card>
			</div>
		</>
	);
};

export default index;
