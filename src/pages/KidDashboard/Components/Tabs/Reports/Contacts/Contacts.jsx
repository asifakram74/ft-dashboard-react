/** @format */

import React, { useState } from "react";
import Card from "../../../../../../components/globalComponents/Card";
import Layout from "../../../../../../components/globalComponents/Layout";
import Search from "../../../../../../assets/images/icon/search.svg";
import ContactListCard from "./ContactListCard";

const Contacts = () => {
	const [search, setSearch] = useState(false);

	return (
		<div>
			<Layout title="Schedule Screen " mainClass="newschedule contacts">
				<Card>
					<div className="dl-flex">
						<h2>Contacts (7)</h2>
						<img
							src={Search}
							alt=""
							onClick={() => setSearch((prev) => !prev)}
						/>
					</div>

					{search && (
						<div className="" className="search-container dl-flex">
							<input type="text" placeholder="Search Contacts" />
							<button onClick={() => setSearch(false)}>Cancel</button>
						</div>
					)}
					<div className=" listitem">
						<ContactListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com"
							date="Created:18 Sep 2020"
						/>
						<ContactListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com"
							date="Created:18 Sep 2020"
						/>
						<ContactListCard
							title="Adamson"
							description="Mobile: +44 7700 900021"
							description2="Email: Adamson@email.com"
							date="Created:18 Sep 2020"
						/>
					</div>
				</Card>
			</Layout>
		</div>
	);
};

export default Contacts;
