import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ButtonOptions from "./ButtonOptions";
import ButtonStyle from "./ButtonStyle";

// component settings
const {
  sizes,
  colors,
  styles,
  shapes,
  fontStyles,
  fontWeights,
  textTransforms,
  textAligns,
  rootClass,
  baseClass
} = ButtonOptions; // prettier-ignore

// component
const Button = ({
  className,
  buttonColor,
  buttonSize,
  buttonStyle,
  buttonShape,
  fontStyle,
  fontWeight,
  textTransform,
  textAlign,
  disabled,
  onClick,
  children
}) => {
  /* eslint-disable react/button-has-type */
  const btRootClass = rootClass(
    cx,
    className,
    buttonStyle,
    buttonShape,
    buttonColor,
    buttonSize,
    fontStyle,
    fontWeight,
    textTransform,
    textAlign,
    disabled
  );
  return (
    <ButtonStyle
      color={buttonColor}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      tAlign={textAlign}
      disabled={disabled}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        {children}
      </button>
    </ButtonStyle>
  );
};

/**
 * display name
 */
Button.displayName = "Button";

/**
 * propType validation
 */
Button.propTypes = {
  className: PropTypes.string,
  buttonColor: PropTypes.oneOf(colors),
  buttonSize: PropTypes.oneOf(sizes),
  buttonStyle: PropTypes.oneOf(styles),
  buttonShape: PropTypes.oneOf(shapes),
  fontStyle: PropTypes.oneOf(fontStyles),
  fontWeight: PropTypes.oneOf(fontWeights),
  textTransform: PropTypes.oneOf(textTransforms),
  textAlign: PropTypes.oneOf(textAligns),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  /* eslint-disable react/require-default-props */
  children: PropTypes.node
};

/**
 * propType default values
 */
Button.defaultProps = {
  buttonColor: "default",
  buttonSize: "default",
  buttonStyle: "container",
  buttonShape: "rectangle",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  textAlign: "center",
  disabled: false,
  className: baseClass,
  onClick: null
};

export default Button;
