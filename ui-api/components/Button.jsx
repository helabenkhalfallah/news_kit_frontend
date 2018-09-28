import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  context,
  type,
  size,
  group,
  onClick,
  className,
  style,
  children,
  ...otherProps
}) => {
  const baseClass = 'gds-button'
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${context}`]: context,
    [`${baseClass}--${size}`]: size,
    [`${baseClass}-group__button`]: group,
  })
  console.log('Button size :', size)
  console.log('Button type :', type)
  console.log('Button context :', context)
  console.log('Button rootClass :', rootClass)

  /* eslint-disable react/button-has-type */
  return (
    <button
      className={rootClass}
      type={type}
      style={style}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}

/**
 * display name
 */
Button.displayName = 'Button'

/**
 * propType validation
 */
Button.propTypes = {
  context: PropTypes.oneOf(['default', 'outline', 'primary', 'secondary', 'success', 'warning', 'info', 'danger']),
  type: PropTypes.string,
  group: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  /* eslint-disable react/require-default-props */
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '']),
  className: PropTypes.string,
  children: PropTypes.node,
}

/**
 * propType default values
 */
Button.defaultProps = {
  context: 'default',
  type: 'button',
  group: false,
  onClick: null,
  style: {},
}

export default Button
