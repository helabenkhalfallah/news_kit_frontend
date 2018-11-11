import React from "react";
import PropTypes from "prop-types";

// import cx from "classnames";
// import SelectOptions from "./SelectOptions";
import { LocalizedStringUtils } from "../../../..";
import { Dico } from "../../../../../app-settings";
import SelectItemStyle from "./SelectItemStyle";

const { localizedString } = LocalizedStringUtils;

const SelectItemEmpty = ({ theme, language }) => (
  <SelectItemStyle theme={theme}>
    <span>{localizedString(Dico.KEYS.SELECT_NO_OPTIONS, language)}</span>
  </SelectItemStyle>
);

/**
 * display name
 */
SelectItemEmpty.displayName = "SelectItemEmpty";

/**
 * propType validation
 */
SelectItemEmpty.propTypes = {
  language: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

/**
 * propType default values
 */
SelectItemEmpty.defaultProps = {};

export default SelectItemEmpty;
