import React, { useEffect, useState } from "react";
import { getTimezones } from "../../../store/utils/timezone/timezone_async_action";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";
import EditKidProfile from "./EditKidProfile";
import { getIdFromPath } from "../../../shared/utility";
import { homeData } from "../../../store/dashboard/home/async-action";
import Loader from "../../../components/globalComponents/Loaders/Loader";
import { history } from "../../../configs/history";
import { setSnackbar } from "../../../store/Snackbar/snackbar";
const KidProfile = (props) => {
  // const id = getIdFromPath(window.location.pathname);
  const { timezones, homeResponse } = props;
  // const encryptedChildId = btoa(localStorage.getItem("child_id"));
  const encryptedChildId = localStorage.getItem("child_id");
  console.log("encryptedChildId Kid Profile", encryptedChildId);
  const child_id = localStorage.getItem("child_id");
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("timezones", timezones);
    if (!_.get(timezones, "data")) {
      props.getTimezones();
    }
    if (!_.get(homeResponse, "data")) {
      props.homeData();
    }
    if (!child_id) {
      history.push("/");
      dispatch(setSnackbar("true", "error", "Please Select a Kid Device"));
    }
  }, []);

  useEffect(() => {
    const resData = _.get(homeResponse, "data");
    if (!resData) {
      return;
    }
    setData(
      resData.devices.find(
        (item) => item.device_info.child_id === Number(child_id)
      )
    );
  }, [_.get(homeResponse, "data")]);
  if (!data) {
    return <Loader layout={true} />;
  }
  const homeDataCall = () => {
    props.homeData();
  };
  return (
    <>
      {data && timezones.data ? (
        <EditKidProfile
          data={data}
          timezoneData={_.get(timezones, "data", [])}
          child_id={child_id}
          homeDataCall={homeDataCall}
        />
      ) : (
        <Loader layout={true} />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    homeResponse: state.homeReducer,
    timezones: state.timezones,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTimezones: () => dispatch(getTimezones()),
    homeData: () => dispatch(homeData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KidProfile);
