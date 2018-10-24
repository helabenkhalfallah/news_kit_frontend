import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ButtonOptions from "../button/ButtonOptions";
import ButtonIconOptions from "./ButtonIconOptions";
import ButtonIconStyle from "./ButtonIconStyle";
import ButtonIconsSVG from "./ButtonIconsSVG";

// button settings
const {
  sizes,
  intents,
  styles,
  shapes,
  fontStyles,
  fontWeights,
  textTransforms,
  textAligns,
} = ButtonOptions; // prettier-ignore

// button icon settings
const {
  icons,
  rootClass,
  baseClass
} = ButtonIconOptions; // prettier-ignore

// icon svgs
const { svgIcons } = ButtonIconsSVG;

// component
const ButtonIcon = ({
  className,
  label,
  icon,
  buttonIntent,
  buttonSize,
  buttonStyle,
  buttonShape,
  fontStyle,
  fontWeight,
  textTransform,
  textAlign,
  disabled,
  loading,
  onClick
}) => {
  const btRootClass = rootClass(
    cx,
    className,
    buttonStyle,
    buttonShape,
    buttonIntent,
    buttonSize,
    fontStyle,
    fontWeight,
    textTransform,
    textAlign,
    disabled,
    loading
  );
  const { path, fillPath } = svgIcons[icon];
  return (
    <ButtonIconStyle
      intent={buttonIntent}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      tAlign={textAlign}
      disabled={disabled}
      loading={loading}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        <div className="ui-api-kit-icon-button--content">
          <div className="ui-api-kit-icon-button--icon">
            <svg viewBox="0 0 24 24">
              <path d={path} />
              <path d={fillPath} fill="none" />
            </svg>
          </div>
          <div className="ui-api-kit-icon-button--text">
            <span>{label}</span>
          </div>
        </div>
      </button>
    </ButtonIconStyle>
  );
};

/**
 * display name
 */
ButtonIcon.displayName = "ButtonIcon";

/**
 * propType validation
 */
ButtonIcon.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOf(icons),
  buttonIntent: PropTypes.oneOf(intents),
  buttonSize: PropTypes.oneOf(sizes),
  buttonStyle: PropTypes.oneOf(styles),
  buttonShape: PropTypes.oneOf(shapes),
  fontStyle: PropTypes.oneOf(fontStyles),
  fontWeight: PropTypes.oneOf(fontWeights),
  textTransform: PropTypes.oneOf(textTransforms),
  textAlign: PropTypes.oneOf(textAligns),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};

/**
 * propType default values
 */
ButtonIcon.defaultProps = {
  className: baseClass,
  label: "edit",
  icon: "edit",
  buttonIntent: "default",
  buttonSize: "default",
  buttonStyle: "fill",
  buttonShape: "rectangle",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  textAlign: "center",
  disabled: false,
  loading: false,
  onClick: null
};

export default ButtonIcon;
