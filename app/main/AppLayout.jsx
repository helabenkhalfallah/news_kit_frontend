import React from "react";
import { withRouter } from "next/router";
import PropTypes from "prop-types";

// components
import Body from "./body/Body";

const AppLayout = ({ type }) => (
  <div>
    <Body type={type} />
  </div>
);

// prop type validation
AppLayout.propTypes = {
  type: PropTypes.string
};

// default prop
AppLayout.defaultProps = {
  type: "Home"
};

export default withRouter(AppLayout);
