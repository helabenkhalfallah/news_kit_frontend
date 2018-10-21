# News Kit

## Project Settings :
1. NextJS
2. ESLint
3. Prettier

## Settings Storybook :
1. getstorybook

2. .storybook => configure stroy book

3. index.css => globale css file (imported inside config.js)

4. preview-head (optional) => css file that contains all style (reconized defaultly by stroybook)

```js
https://storybook.js.org/configurations/add-custom-head-tags/
```

5.knob : lets dynamically change component on story.

6. /components => react component (define proptypes).

7. /stories => story components documentation
a. .jsx => component how it is invoked =
```js
  <Button
    title={text("Title", "Click me !")}
    buttonStyle={OptionalSelect("Style", stylesOptions, "fill")}
    buttonShape={OptionalSelect("Shape", shapesOptions, "rectangle")}
    buttonIntent={OptionalSelect("Intent", intentsOptions, "default")}
    buttonSize={OptionalSelect("Size", sizeOptions, "normal")}
    fontStyle={OptionalSelect("Font Style", fontStylesOptions, "normal")}
    fontWeight={OptionalSelect("Font Weight", fontWeightsOptions, "normal")}
    textTransform={OptionalSelect(
      "Text Transform",
      textTransformsOptions,
      "none"
    )}
    textAlign={OptionalSelect("Text Align", textAlignsOptions, "center")}
    disabled={boolean("Disabled", false)}
    onClick={action("button_clicked")}
  />
```
b. readme of the component :
```js
The `<Button>` class support only text display.
```

8. /stories/Button.jsx => export component and documentation.

9. ArtBoard : /stories/index.jsx 
This file will contain all our story components :
```js
stories
  .addDecorator((story, context) => (story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
````

10. addons.js
What will been diplayed in the right panel :
```js
import '@storybook/addon-knobs/register'
import 'storybook-readme/register'
import '@storybook/addon-options/register'
import '@storybook/addon-actions/register'
```

11. Next JS CSS configuration :
```js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
})
```

12. .babelrc modification :
```js
{
  "presets": [
    "next/babel"
  ],
  "plugins": []
}
```

## Styled Component :

1. configure .babelrc :
```js 
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

2. ButtonWrapper : styled component to wrap CSS (hover, state..) :
```js
.news-kit-button--default{ 
    background : #FFFFFF; 
    border-color : #A569BD;
    color : #A569BD;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--default:hover {
    background-color: #A569BD;
    color: #FFFFFF;
  }
````

3. /components/Button.jsx :
```js
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
```

## Enzyme with Mocha unit test :

1. package install :
```js
npm i --save-dev enzyme enzyme-adapter-react-16
npm i --save-dev mocha chai sinon enzyme-to-json
```