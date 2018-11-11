import React from "react";
import PropTypes from "prop-types";

import SelectItem from "./select-item/SelectItem";

// select components
const Select = ({
  language,
  theme,
  options,
  multi,
  searchable,
  clearable,
  placeholder,
  value,
  disabled,
  onChange
  // eslint-disable-next-line arrow-body-style
}) => {
  return (
    <SelectItem
      language={language}
      theme={theme}
      options={options}
      disabled={disabled}
      multi={multi}
      searchable={searchable}
      clearable={clearable}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

/**
 * display name
 */
Select.displayName = "Select";

/**
 * propType validation
 */
Select.propTypes = {
  language: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

/**
 * propType default values
 */
Select.defaultProps = {
  options: null,
  disabled: false,
  multi: false,
  searchable: false,
  clearable: false,
  placeholder: null,
  value: null,
  onChange: null
};

export default Select;
