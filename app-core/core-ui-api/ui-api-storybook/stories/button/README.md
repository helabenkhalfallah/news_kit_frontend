## `<Button>` class

The `<Button>` class support only text display.
- For `icon + text` you can use `ButtonIcon` class.
- For only `icon` you can use `Icon` class

# Props :
- title : text to place in the button (required).
- buttonIntent : visual intent color to apply to button (`primary`, `warning`, `danger`, `info`, `success`, ...).
- buttonSize : can be set to `extra-extra-small`, `extra-small`, `small`, `normal`, `large`, `extra-large` or  `extra-extra-large`.
- buttonStyle : can be set to `fill`, `outline` or `text` style.
- buttonShape : button shape can be `rectangle`, `rounded` or `oval`.
- fontStyle : can be set to `normal`, `italic` or `oblique`.
- fontWeight : can be set to `normal`, `bold` or `lighter`.
- textTransform :  can be set to `none`, `capitalize`, `uppercase` or `lowercase`.
- textAlign : can be set to `left`, `right`, `center` or `justify`.
- disabled : non-interactive statut.
- onClick : click event handler.

# Class definition :

- `ButtonOptions`: manage button options like intent, size, shape, style, font style and weight, ...
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

- `ButtonTheme` : button design system (option => CSS value). 
<br> For each button option there is an according css value :

```js
// button size option => CSS size value
const bSizes = {
  normal: "medium",
  xxsmall: "xx-small",
  xsmall: "x-small",
  small: "small",
  xxlarge: "xx-large",
  xlarge: "x-large",
  large: "large"
};

// text transform option => CSS text-transform value
const textTransforms = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase"
};

// text align option => CSS text-align value
const textAligns = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify"
};
```

- `ButtonStyle` : button CSS style (styled components).
```js
const ButtonStyle = styled(Button)`
  .ui-api-kit-button--bshape--${props => (props.shape ? props.shape : defaultShape)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    border-radius: ${props => (props.shape ? shapes[props.shape] : defaultRadius)};
  }
```
