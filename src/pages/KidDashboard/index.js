/** @format */

import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Layout from "../../components/globalComponents/Layout";
import Loader from "../../components/globalComponents/Loaders/Loader";
import { history } from "../../configs/history";
import { homeData } from "../../store/dashboard/home/async-action";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import KidDashboard from "./Components/KidDashboard";
import _ from "lodash";
const KidDashboardMain = (props) => {
	const dispatch = useDispatch();
	const { homeResponse, homeData } = props;
	const [data, setData] = useState("");
	// const encryptedChildId = btoa(localStorage.getItem("child_id"));
	const child_id = localStorage.getItem("child_id");
	// console.log(
	//   "encryptedChildId",
	//   Number(encryptedChildId),
	//   _.get(encryptedChildId)
	// );
	useEffect(() => {
		if (!localStorage.getItem("child_id")) {
			// console.log("in", encryptedChildId);
			// dispatch({ type: "SET_CHILD_ID", data: "" });
			history.push("/");
			dispatch(setSnackbar("true", "error", "Please Select a Kid Device"));
		}
		if (!_.get(homeResponse, "data")) {
			homeData();
		}
	}, []);
	useEffect(() => {
		if (_.get(homeResponse, "isSuccess")) {
			const kids = _.get(homeResponse, "data.devices");

			if (!kids || !Number(child_id)) {
				console.log("return", kids, homeResponse, child_id);
				return;
			}
			// const child_id = _.get(encryptedChildId);
			const filteredKid = kids.find(
				(item) => item.device_info.child_id === Number(child_id),
			);
			// console.log("filteredKid", filteredKid);
			setData(filteredKid);
			if (!filteredKid) {
				history.push("/");
				dispatch(setSnackbar("true", "error", "Please Select a Kid Device"));
			}
		}
	}, [_.get(homeResponse, "isSuccess")]);
	// console.log("kid data", data);
	return (
		<>
			{_.get(data, "device_info") ? (
				<Layout mainClass="kids-dashboard">
					<KidDashboard data={data.device_info} />
				</Layout>
			) : (
				<Loader layout={true} />
			)}
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		homeResponse: state.homeReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		homeData: () => dispatch(homeData()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(KidDashboardMain);
