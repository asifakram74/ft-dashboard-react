/** @format */

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
// import "./Navbar.css";

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<i onClick={showSidebar} className="material-icons">
						menu
					</i>
				</Link>
			</div>

			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<a
							className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only Parents menu_btn"
							href="/"
							data-target="slide-out"
							onClick={showSidebar}>
							<i className="material-icons">menu</i>
						</a>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
