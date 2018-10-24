import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import SVGIcon from "../svg/SVGIcon";
import ButtonOptions from "../button/ButtonOptions";
import ButtonIconOptions from "./ButtonIconOptions";
import ButtonIconStyle from "./ButtonIconStyle";

// button settings
const {
  sizes,
  intents,
  styles,
  shapes,
  fontStyles,
  fontWeights,
  textTransforms,
} = ButtonOptions; // prettier-ignore

// button icon settings
const {
  rootClass,
  baseClass,
  icons,
  svgIcons,
  iconAligns
} = ButtonIconOptions; // prettier-ignore

// component
const ButtonIcon = ({
  className,
  label,
  icon,
  iconAlign,
  buttonIntent,
  buttonSize,
  buttonStyle,
  buttonShape,
  fontStyle,
  fontWeight,
  textTransform,
  disabled,
  loading,
  onClick
}) => {
  const btRootClass = rootClass(
    cx,
    className,
    iconAlign,
    buttonStyle,
    buttonShape,
    buttonIntent,
    buttonSize,
    fontStyle,
    fontWeight,
    textTransform,
    disabled,
    loading
  );
  const { path, fillPath } = svgIcons[icon];
  return (
    <ButtonIconStyle
      intent={buttonIntent}
      iconAlign={iconAlign}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      disabled={disabled}
      loading={loading}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        <div className="ui-api-kit-icon-button--content">
          <div className="ui-api-kit-icon-button--icon">
            <SVGIcon path={path} fillPath={fillPath} />
          </div>
          <div className="ui-api-kit-button--text">
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
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(icons).isRequired,
  buttonIntent: PropTypes.oneOf(intents),
  buttonSize: PropTypes.oneOf(sizes),
  buttonStyle: PropTypes.oneOf(styles),
  buttonShape: PropTypes.oneOf(shapes),
  fontStyle: PropTypes.oneOf(fontStyles),
  fontWeight: PropTypes.oneOf(fontWeights),
  textTransform: PropTypes.oneOf(textTransforms),
  iconAlign: PropTypes.oneOf(iconAligns),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};

/**
 * propType default values
 */
ButtonIcon.defaultProps = {
  className: baseClass,
  buttonIntent: "default",
  buttonSize: "default",
  buttonStyle: "fill",
  buttonShape: "rectangle",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  iconAlign: "left",
  disabled: false,
  loading: false,
  onClick: null
};

export default ButtonIcon;
