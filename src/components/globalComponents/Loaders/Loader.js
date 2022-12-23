import React from "react";
import PropTypes from "prop-types";
import Media from "./Skeleton";
import Layout from "../Layout";

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader(props) {
  const layout = props.layout || false;
  return (
    <div>
      {!layout ? (
        <Media details={props} />
      ) : (
        <Layout>
          <Media details={props} />
        </Layout>
      )}
    </div>
  );
}
