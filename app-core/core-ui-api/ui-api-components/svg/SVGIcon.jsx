import React from "react";
import PropTypes from "prop-types";

// svg icon components
const SVGIcon = ({ path, fillPath }) => (
  <svg viewBox="0 0 24 24">
    <path d={path} />
    <path d={fillPath} fill="none" />
  </svg>
);

/**
 * propType validation
 */
SVGIcon.propTypes = {
  path: PropTypes.string,
  fillPath: PropTypes.string
};

/**
 * propType default values
 */
SVGIcon.defaultProps = {
  path: "",
  fillPath: ""
};

export default SVGIcon;
