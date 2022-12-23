/** @format */

import React from "react";
import Parent from "../../components/Saveparents";
import _ from "lodash";
import SingleParent from "./SingleParent";
// import { Button } from "@material-ui/core";
import MaterialButton from "../../components/globalComponents/Button";
import { connect } from "react-redux";

const ShowParent = (props) => {
  const { redirectToInvite, getCoparents } = props;
  return (
    <>
      {props.coparentsData.coparents.map((parent) => {
        return (
          <div key={parent.user_id}>
            {/* <Parent data={parent} /> */}
            <SingleParent data={parent} getCoparents={getCoparents} />
          </div>
        );
      })}

      <MaterialButton onClick={redirectToInvite} title="Invite Parent" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    coparentsData: state.coparentsReducer.data,
  };
};
export default connect(mapStateToProps, null)(ShowParent);
