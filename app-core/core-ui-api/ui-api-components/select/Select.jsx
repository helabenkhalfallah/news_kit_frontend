import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

import SelectStyle from "./SelectStyle";
import SelectOptionStyle from "./SelectOptionStyle";

// select options
const SelectOptions = ({ options }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  options.map(option => <SelectOptionStyle>{option}</SelectOptionStyle>);

// select components
const Select = ({ options }) => {
  if (options) {
    return (
      <SelectStyle>
        <SelectOptions options={options} />
      </SelectStyle>
    );
  }
  return <div>nothing to render</div>;
};

/**
 * display name
 */
Select.displayName = "Button";

/**
 * propType validation
 */
Select.propTypes = {
  options: PropTypes.array.isRequired
};

/**
 * propType default values
 */
Select.defaultProps = {};

export default Select;
