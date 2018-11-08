import React from "react";
import PropTypes from "prop-types";
import SelectBase from "react-select";

import cx from "classnames";
import SelectStyle from "./SelectStyle";
import SelectOptions from "./SelectOptions";

// select components
const { baseClass, rootClass } = SelectOptions;
const Select = ({
  options,
  className,
  theme,
  disabled,
  multi,
  searchable,
  clearable,
  placeholder,
  value,
  onChange
}) => {
  const btRootClass = rootClass(cx, className, disabled);
  return (
    <SelectStyle theme={theme} disabled={disabled}>
      <SelectBase
        className={btRootClass}
        options={options}
        isDisabled={disabled}
        isMulti={multi}
        isSearchable={searchable}
        isClearable={clearable}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </SelectStyle>
  );
};

/**
 * display name
 */
Select.displayName = "Button";

/**
 * propType validation
 */
Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func
};

/**
 * propType default values
 */
Select.defaultProps = {
  className: baseClass,
  disabled: false,
  multi: false,
  searchable: false,
  clearable: false,
  placeholder: null,
  value: null,
  onChange: null
};

export default Select;
