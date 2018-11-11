import React, { useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

import SelectOptions from "../SelectOptions";
import SelectItemStyle from "./SelectItemStyle";
import SelectItemList from "../select-list/SelectItemList";
import SelectItemHeader from "../select-header/SelectItemHeader";

// select settings
const {
  baseClass,
  listAnimationClass,
  selectorHeaderClass,
  selectorListClass
} = SelectOptions;

// select item component
const SelectItem = ({
  language,
  theme,
  options,
  disabled,
  multi,
  searchable,
  clearable,
  placeholder,
  value,
  onChange
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const listClass = selectorListClass(cx, baseClass);
  const headerClass = selectorHeaderClass(cx, baseClass);
  return (
    <SelectItemStyle theme={theme}>
      <div className={baseClass}>
        <SelectItemHeader
          className={headerClass}
          theme={theme}
          language={language}
          disabled={disabled}
          multi={multi}
          searchable={searchable}
          clearable={clearable}
          placeholder={placeholder}
          value={value}
          showOptions={showOptions}
          onClick={() => setShowOptions(!showOptions)}
          onEditChange={text => setSearchText(text)}
        />
        <CSSTransition
          in={showOptions}
          timeout={300}
          classNames={listAnimationClass}
          unmountOnExit
        >
          <SelectItemList
            className={listClass}
            theme={theme}
            options={options}
            filter={searchText}
            onChange={item => {
              console.log("List item select onChange : ", item);
              onChange();
            }}
          />
        </CSSTransition>
      </div>
    </SelectItemStyle>
  );
};

/**
 * display name
 */
SelectItem.displayName = "SelectItem";

/**
 * propType validation
 */
SelectItem.propTypes = {
  language: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

/**
 * propType default values
 */
SelectItem.defaultProps = {
  disabled: false,
  multi: false,
  searchable: false,
  clearable: false,
  placeholder: "",
  onChange: null
};

export default SelectItem;
