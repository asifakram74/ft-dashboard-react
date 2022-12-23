/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { store } from "../../store/configureStore";

const Menuli = (props) => {
	const handleDrawerToggle = () => {
		store.dispatch({ type: "TOGGLE_SIDEBAR_CLOSE" });
	};
	return (
		<>
			<li
				className="bold"
				// onClick={handleDrawerToggle}
			>
				<NavLink
					className="waves-effect waves-cyan "
					to={props.url}
					activeClassName="active"
					exact
					onClick={handleDrawerToggle}>
					<i className={props.icon}></i>
					<span className="menu-title">{props.tile}</span>
					<span>{props.children}</span>
				</NavLink>
			</li>
		</>
	);
};

export default Menuli;
