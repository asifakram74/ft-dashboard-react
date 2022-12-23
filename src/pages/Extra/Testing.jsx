/** @format */

import React, { Component } from "react";
import Picker from "react-mobile-picker-scroll";

class Testing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueGroups: {
				title: "Mr.",
				firstName: "Micheal",
				secondName: "Jordan",
			},
			optionGroups: {
				title: ["0", "1", "Ms.", "Dr."],
				firstName: ["John", "Micheal", "Elizabeth"],
				secondName: [
					"Lennon",
					"Jackson",
					"Jordan",
					"Legend",
					"Taylor",
					"Jackson",
					"Jordan",
					"Legend",
					"Taylor",
				],
			},
		};
	}

	// Update the value in response to user picking event
	handleChange = (name, value) => {
		this.setState(({ valueGroups }) => ({
			valueGroups: {
				...valueGroups,
				[name]: value,
			},
		}));
	};

	render() {
		const { optionGroups, valueGroups } = this.state;

		return (
			<Picker
				optionGroups={optionGroups}
				valueGroups={valueGroups}
				onChange={this.handleChange}
			/>
		);
	}
}
export default Testing;
