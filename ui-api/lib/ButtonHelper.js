// CSS BEM
const baseClass = 'news-kit-button'
const groupClass = 'group__button'
const rootClass = (cx, className, context, size, group) => (
  cx(baseClass, className, {
    [`${baseClass}--${context}`]: context,
    [`${baseClass}--${size}`]: size,
    [`${baseClass}-${groupClass}`]: group,
  })
)

// size options
const sizeOptions = {
  xs: 'xs',
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}
const sizeTypes = sizeOptions ? Object.values(sizeOptions) : []

// context options
const contextOptions = {
  default: 'default',
  outline: 'outline',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  info: 'info',
  danger: 'danger',
}
const contextTypes = contextOptions ? Object.values(contextOptions) : []

// button helper
const ButtonHelper = {
  baseClass,
  rootClass,
  sizeOptions,
  contextOptions,
  sizeTypes,
  contextTypes,
}

export default ButtonHelper
