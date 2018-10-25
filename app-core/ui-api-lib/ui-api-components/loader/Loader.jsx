import React from "react";
import PropTypes from "prop-types";

// assets path
const urlSrc = process.env.APP_SRC_PATH;
const loaderSVG = `${urlSrc}bt_icon_loader.svg`;

// svg loader components
const SVGLoader = ({ className }) => (
  <img className={className} alt="loader" src={loaderSVG} />
);

/**
 * propType validation
 */
SVGLoader.propTypes = {
  className: PropTypes.string
};

/**
 * propType default values
 */
SVGLoader.defaultProps = {
  className: ""
};

export default SVGLoader;
