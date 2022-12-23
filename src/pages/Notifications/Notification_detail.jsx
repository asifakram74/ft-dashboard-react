import React, { useEffect, useState } from "react";
import Button from "../../components/globalComponents/Button";
import Layout from "../../components/globalComponents/Layout";
import { Link } from "react-router-dom";
import { getIdFromPath } from "../../shared/utility";
import { connect } from "react-redux";
import { allNotifications } from "../../store/dashboard/notifications/notifications-async-action";
import { history } from "../../configs/history";
import _ from "lodash";
import AtlaunchNotification from "./AtlaunchNotification";
import Loader from "../../components/globalComponents/Loaders/Loader";
import NoDataBlock from "../Dashboard/Components/NoDataBlock";
const NotificationDetail = (props) => {
  const id = getIdFromPath(window.location.pathname);
  const [data, setData] = useState("");
  useEffect(() => {
    if (!_.get(props, "allNotificationsData.data")) {
      props.allNotifications();
    }
  }, []);
  useEffect(() => {
    const doc = _.get(props, "allNotificationsData.data");
    if (!doc) {
      return;
    }
    setData(doc.find((item) => item.id === Number(id)));
  }, [_.get(props, "allNotificationsData.data")]);
  if (!id) {
    history.push("/notifications");
    return;
  }
  if (!data) {
    return (
      <Layout>
        <NoDataBlock
          img="/images/icon/home_notification.svg"
          text="No Notification against this ID"
        ></NoDataBlock>
      </Layout>
    );
  }
  return (
    <>
      {data ? (
        <AtlaunchNotification data={data} close={false} />
      ) : (
        <Loader layout={true} />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allNotificationsData: state.allNotificationsData,
    userReducer: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    allNotifications: () => dispatch(allNotifications()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationDetail);
