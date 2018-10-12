import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UIUtils from "../../ui-api-utils";
import ButtonWrapper from "./ButtonWrapper";

// component settings
const { ButtonHelper } = UIUtils;
const { sizeTypes, contextTypes, rootClass } = ButtonHelper;

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
  /* eslint-disable react/require-default-props */
  className: PropTypes.string,
  context: PropTypes.oneOf(contextTypes),
  size: PropTypes.oneOf(sizeTypes),
  type: PropTypes.string,
  children: PropTypes.node,
  group: PropTypes.bool,
  onClick: PropTypes.func
};

/**
 * propType default values
 */
Button.defaultProps = {
  context: "default",
  type: "button",
  group: false,
  onClick: null
};

export default Button;
