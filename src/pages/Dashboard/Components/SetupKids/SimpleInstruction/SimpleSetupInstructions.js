import React from "react";
import { connect } from "react-redux";
import Loader from "../../../../../components/globalComponents/Loaders/Loader";
import SimpleInstructionsRender from "./SimpleInstructionsRender";

const SimpleSetupInstructions = (props) => {
  const { userReducer } = props;
  return (
    <>
      {userReducer.isSuccess ? (
        <SimpleInstructionsRender user={userReducer.user} />
      ) : (
        <Loader />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(SimpleSetupInstructions);
