/** @format */

import * as React from "react";
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	BarSeries,
	Title,
	Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";

import { dailyScreenTime as data } from "./data-vizualization";
import Card from "../../../../../../components/globalComponents/Card";

const legendStyles = () => ({
	root: {
		display: "flex",
		margin: "auto",
		flexDirection: "row",
	},
});
const legendRootBase = ({ classes, ...restProps }) => (
	<Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const legendLabelStyles = () => ({
	label: {
		whiteSpace: "nowrap",
	},
});
const legendLabelBase = ({ classes, ...restProps }) => (
	<Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
	legendLabelBase,
);

export default class Demo extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data,
		};
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<>
				<Card>
					<Chart data={chartData}>
						<ArgumentAxis />
						<ValueAxis max={2400} />

						<BarSeries
							name="Social"
							valueField="hydro"
							argumentField="hourly"
						/>
						<BarSeries
							name="Entertainment"
							valueField="oil"
							argumentField="hourly"
						/>
						<BarSeries
							name="Productivity"
							valueField="gas"
							argumentField="hourly"
						/>

						<Animation />
						<Legend
							position="bottom"
							rootComponent={Root}
							labelComponent={Label}
						/>
						{/* <Title text="Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)" /> */}
						<Stack
							stacks={[{ series: ["Social", "Entertainment", "Productivity"] }]}
						/>
					</Chart>
				</Card>
			</>
		);
	}
}
