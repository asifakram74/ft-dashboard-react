/** @format */

import React, { useEffect } from "react";
import Layout from "../../components/globalComponents/Layout";
import _ from "lodash";
import { connect } from "react-redux";
import Loader from "../../components/globalComponents/Loaders/Loader";
import ParentsConditions from "./ParentsConditions";
import { getCoparents } from "../../store/dashboard/coparents/async-action";

const Parents = (props) => {
  const { data, getCoparents, isSuccess } = props;
  useEffect(() => {
    if (!_.size(data)) {
      getCoparents();
    }
  }, []);
  return (
    <>
      {!isSuccess ? (
        <Loader layout={true} />
      ) : (
        <Layout title={props.title}>
          <ParentsConditions data={data} getCoparents={getCoparents} />
        </Layout>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.coparentsReducer.data,
    isSuccess: state.coparentsReducer.isSuccess,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCoparents: () => dispatch(getCoparents()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Parents);
