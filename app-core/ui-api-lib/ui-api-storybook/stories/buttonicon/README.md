## `<ButtonIcon>` class

The `<ButtonIcon>` class extends `<Button>` class to add icon :

```js
// button icon style
// extends button style
const ButtonIconStyle = styled(ButtonStyle)`
```

1. Predefined icons `ButtonIconOptions` :

```js
// button with predefined icons
const iconsOptions = {
  add: "add",
  remove: "remove",
  edit: "edit",
  clear: "clear"
}
```

2. Icons align options `ButtonIconOptions` :

```js
// button text aligns options
const iconAlignsOptions = {
  left: "left",
  right: "right"
}
```

3. Icons are custom svg component `<IconSVG>` :

```js
// icon svg components
const IconSVG = ({ path, fillPath }) => (
  <svg viewBox="0 0 24 24">
    <path d={path} />
    <path d={fillPath} fill="none" />
  </svg>
);
```

4. SVG icons provider `SVGIconProvider`:

```js
// svg icons provider
const svgIcons = {
  add: {
    path: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fillPath: "M0 0h24v24H0z"
  },
  remove: {
    path: "M19 13H5v-2h14v2z",
    fillPath: "M0 0h24v24H0z"
  },
```

5. `<ButtonIcon>` keep `<Button>` options :

# Button Props :
- buttonIntent : visual intent color to apply to button (`primary`, `warning`, `danger`, `info`, `success`, ...).
- buttonSize : can be set to `extra-extra-small`, `extra-small`, `small`, `normal`, `large`, `extra-large` or  `extra-extra-large`.
- buttonStyle : can be set to `fill`, `outline` or `text` style.
- buttonShape : button shape can be `rectangle`, `rounded` or `oval`.
- fontStyle : can be set to `normal`, `italic` or `oblique`.
- fontWeight : can be set to `normal`, `bold` or `lighter`.
- textTransform :  can be set to `none`, `capitalize`, `uppercase` or `lowercase`.
- disabled : non-interactive statut.
- onClick : click event handler.

# Button Icon Props :
- label : button label.
- icon : button predefined svg icon.
- iconAlign : icon align left or right.
- loading : showing loading statut (icon).