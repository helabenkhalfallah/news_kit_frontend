## `<Button>` class

The `<Button>` class support only text display.
- For `icon + text` you can use `ButtonIcon` class.
- For only `icon` you can use `Icon` class

# Class definition :

- `ButtonOptions`: define different button options like intent, size, shape, style, font style and weight, ...
```js
const ButtonOptions = {
  baseClass,
  rootClass,
  intentsOptions,
  intents,
  sizeOptions,
  sizes,
  stylesOptions,
  styles,
  shapesOptions,
  shapes,
  fontStylesOptions,
  fontStyles,
  fontWeightsOptions,
  fontWeights,
  textTransformsOptions,
  textTransforms,
  textAlignsOptions,
  textAligns,
  iconsOptions,
  icons
};
```

- `ButtonStyle` : define the button CSS style (styled components).
```js
const ButtonStyle = styled(Button)`
  .ui-api-kit-button--bshape--${props => (props.shape ? props.shape : defaultShape)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    border-radius: ${props => (props.shape ? shapes[props.shape] : defaultRadius)};
  }
```

- `ButtonTheme` : button design system. 
<br> For each button option there were an according css value :

```js
const backgrounds = {
  default: "#a569bd",
  primary: "#00a7cf",
  secondary: "#ff0080",
  success: "#1cce0c",
  warning: "#ff9900",
  info: "#2196f3",
  danger: "#ff5a34"
};

const bSizes = {
  normal: "medium",
  xxsmall: "xx-small",
  xsmall: "x-small",
  small: "small",
  xxlarge: "xx-large",
  xlarge: "x-large",
  large: "large"
};
```
