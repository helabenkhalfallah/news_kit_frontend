import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import SVGIcon from "../svg/SVGIcon";
import ButtonOptions from "../button/ButtonOptions";
import ButtonIconOptions from "./ButtonIconOptions";
import ButtonIconStyle from "./ButtonIconStyle";
import AppService from "../../../../app-services";

// language settings
const { MesssagesProvider } = AppService;

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
  theme,
  language,
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
    disabled
  );
  const { path, fillPath } = svgIcons[icon];
  const message = MesssagesProvider.localizedMessage(language, label);
  return (
    <ButtonIconStyle
      theme={theme}
      intent={buttonIntent}
      iconAlign={iconAlign}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      disabled={disabled}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        <div className="ui-api-kit-icon-button--content">
          <div className="ui-api-kit-icon-button--icon">
            <SVGIcon path={path} fillPath={fillPath} />
          </div>
          <div className="ui-api-kit-button--text">
            <span>{message}</span>
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
  theme: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
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
  onClick: PropTypes.func
};

/**
 * propType default values
 */
ButtonIcon.defaultProps = {
  className: baseClass,
  buttonIntent: "default",
  buttonShape: "rectangle",
  buttonSize: "normal",
  buttonStyle: "fill",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  iconAlign: "left",
  disabled: false,
  onClick: null
};

export default ButtonIcon;
