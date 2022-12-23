import React from "react";
import { history } from "../../configs/history";
import _ from "lodash";
import NoParent from "./NoParent";
import ShowParent from "./ShowParent";

const ParentsConditions = (props) => {
  const { data, getCoparents } = props;
  const RedirectInviteParent = () => {
    history.push("/Invite_parent");
  };
  return (
    <>
      {_.size(data.coparents) < 1 ? (
        <NoParent redirectToInvite={RedirectInviteParent} />
      ) : (
        <ShowParent
          data={data}
          redirectToInvite={RedirectInviteParent}
          getCoparents={getCoparents}
        />
      )}
    </>
  );
};

export default ParentsConditions;
