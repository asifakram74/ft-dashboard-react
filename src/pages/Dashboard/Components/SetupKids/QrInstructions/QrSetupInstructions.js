import React from "react";
import { connect } from "react-redux";
import Loader from "../../../../../components/globalComponents/Loaders/Loader";
import QrInstructionRender from "./QrInstructionRender";

const QrSetupInstructions = (props) => {
  return (
    <>
      {props.userReducer.isSuccess ? (
        <QrInstructionRender user={props.userReducer.user} />
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
export default connect(mapStateToProps, null)(QrSetupInstructions);
