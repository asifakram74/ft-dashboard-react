/** @format */
import React from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Card from "../../../../../components/globalComponents/Card";
import Item from "../../Globel/Item";
import { kidReportsList } from "../../../../../constants/ViewLists";
import Maintitle from "../../../../../components/globalComponents/Maintitle";
const Reports = () => {
	return (
		<div className="list-item">
			<Maintitle title="Reports" url="/setup_child" />

			<Card>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="">
							<List>
								{kidReportsList.map((item) => {
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
		</div>
	);
};

export default Reports;
