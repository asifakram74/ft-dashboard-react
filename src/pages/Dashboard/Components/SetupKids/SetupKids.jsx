import React, { useEffect } from "react";
import Layout from "../../../../components/globalComponents/Layout";
import { connect } from "react-redux";
import { homeData } from "../../../../store/dashboard/home/async-action";
import SimpleSetupInstructions from "./SimpleInstruction/SimpleSetupInstructions";
import Loader from "../../../../components/globalComponents/Loaders/Loader";
import QrSetupInstructions from "./QrInstructions/QrSetupInstructions";
const SetupKids = (props) => {
  const { homeResponse } = props;
  useEffect(() => {
    if (!homeResponse.data) {
      props.homeData();
    }
    // console.log("SetupKids props", props);
  }, []);
  // console.log("SetupKids OUT PROPS", props);
  // console.log(
  //   "Success Status",
  //   homeResponse.isSuccess,
  //   props.userReducer.isSuccess,
  //   homeResponse.data
  // );
  return (
    <Layout title="Setup Kids Instructions">
      {!homeResponse.isSuccess ? (
        <Loader />
      ) : (
        [
          !props.userReducer.isSuccess ? (
            <Loader />
          ) : (
            [
              homeResponse.data.app_config.activation_funnel === 1 ? (
                <QrSetupInstructions user={props.userReducer.user} />
              ) : (
                <SimpleSetupInstructions user={props.userReducer.user} />
              ),
            ]
          ),
        ]
      )}
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    homeResponse: state.homeReducer,
    userReducer: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    homeData: () => dispatch(homeData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SetupKids);
