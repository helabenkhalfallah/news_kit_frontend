import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UIUtils from "../../ui-api-utils";
import ButtonWrapper from "./ButtonWrapper";

// component settings
const { ButtonHelper } = UIUtils;
const {
  sizeTypes,
  contextTypes,
  rootClass,
  baseClass
} = ButtonHelper; // prettier-ignore

// component
const Button = ({
  className,
  context,
  size,
  type,
  onClick,
  children,
  ...otherProps
}) => {
  /* eslint-disable react/button-has-type */
  const btRootClass = rootClass(cx, className, context, size);
  return (
    <ButtonWrapper>
      <button
        className={btRootClass}
        type={type}
        onClick={onClick}
        {...otherProps}
      >
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
  context: PropTypes.oneOf(contextTypes),
  type: PropTypes.string,
  onClick: PropTypes.func,
  /* eslint-disable react/require-default-props */
  size: PropTypes.oneOf(sizeTypes),
  children: PropTypes.node
};

/**
 * propType default values
 */
Button.defaultProps = {
  context: "default",
  type: "button",
  className: baseClass,
  onClick: null
};

export default Button;
