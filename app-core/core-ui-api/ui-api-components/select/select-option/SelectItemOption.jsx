import React from "react";
import PropTypes from "prop-types";

// import cx from "classnames";
// import SelectOptions from "./SelectOptions";
import SelectItemOptionStyle from "./SelectItemOptionStyle";

const SelectItemOption = ({ theme, option }) => (
  <SelectItemOptionStyle theme={theme}>
    <span>{option.label}</span>
  </SelectItemOptionStyle>
);

/**
 * display name
 */
SelectItemOption.displayName = "SelectItemOption";

/**
 * propType validation
 */
SelectItemOption.propTypes = {
  theme: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired
};

/**
 * propType default values
 */
SelectItemOption.defaultProps = {};

export default SelectItemOption;
