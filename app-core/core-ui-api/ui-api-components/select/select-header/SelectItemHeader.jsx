import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import { LocalizedStringUtils } from "../../../..";
import { Dico } from "../../../../../app-settings";
import SelectOptions from "../SelectOptions";
import SelectItemHeaderStyle from "./SelectItemHeaderStyle";

// select settings
const {
  baseClass,
  arrowAnimationClass,
  headerTxtClass,
  headerIconContainerClass,
  headerIconClass
} = SelectOptions;

const urlSrc = process.env.APP_SRC_PATH;
const selSelectorSVG = `${urlSrc}select-arrow.svg`;
const { localizedString } = LocalizedStringUtils;

// select header component
const SelectItemHeader = ({
  language,
  theme,
  value,
  showOptions,
  disabled,
  searchable,
  multi,
  clearable,
  placeholder,
  onEditChange,
  onClick
}) => {
  const [selectValue, setSelectValue] = useState(value);
  const txtClass = headerTxtClass(cx, baseClass);
  const imgContainer = headerIconContainerClass(cx, baseClass);
  const imgClass = headerIconClass(cx, baseClass);
  const defaultPlaceHolder = localizedString(
    Dico.KEYS.SELECT_PLACEHOLDER,
    language
  );
  const isEditEnabled = disabled ? true : !searchable;
  return (
    <SelectItemHeaderStyle
      theme={theme}
      showOptions={showOptions}
      disabled={disabled}
      searchable={searchable}
    >
      <input
        className={txtClass}
        name="item"
        disabled={isEditEnabled}
        placeholder={placeholder || defaultPlaceHolder}
        value={selectValue}
        onChange={event => {
          const text = event.target.value;
          onEditChange(text);
          setSelectValue(text);
        }}
      />
      <button type="button" className={imgContainer} onClick={onClick}>
        <CSSTransition
          in={showOptions}
          classNames={arrowAnimationClass}
          timeout={200}
        >
          <img alt="selector" className={imgClass} src={selSelectorSVG} />
        </CSSTransition>
      </button>
    </SelectItemHeaderStyle>
  );
};

/**
 * display name
 */
SelectItemHeader.displayName = "SelectItemHeader";

/**
 * propType validation
 */
SelectItemHeader.propTypes = {
  language: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  showOptions: PropTypes.bool,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  onEditChange: PropTypes.func,
  onClick: PropTypes.func
};

/**
 * propType default values
 */
SelectItemHeader.defaultProps = {
  disabled: false,
  showOptions: false,
  multi: false,
  searchable: false,
  clearable: false,
  placeholder: "",
  onEditChange: null,
  onClick: null
};

export default SelectItemHeader;
