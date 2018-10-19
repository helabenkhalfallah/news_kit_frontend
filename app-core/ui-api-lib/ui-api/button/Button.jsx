import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UIUtils from "../../ui-api-utils";
import ButtonWrapper from "./ButtonWrapper";

// component settings
const { ButtonHelper } = UIUtils;
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
} = ButtonHelper; // prettier-ignore

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
    textAlign
  );
  return (
    <ButtonWrapper
      color={buttonColor}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      tAlign={textAlign}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        {children}
      </button>
    </ButtonWrapper>
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
  className: baseClass,
  onClick: null
};

export default Button;
