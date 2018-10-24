import React from "react";
import PropTypes from "prop-types";

// icon svg components
const IconSVG = ({ path, fillPath }) => (
  <svg viewBox="0 0 24 24">
    <path d={path} />
    <path d={fillPath} fill="none" />
  </svg>
);

/**
 * propType validation
 */
IconSVG.propTypes = {
  path: PropTypes.string,
  fillPath: PropTypes.string
};

/**
 * propType default values
 */
IconSVG.defaultProps = {
  path: "",
  fillPath: ""
};

export default IconSVG;
