## News Kit
# Settings Storybook :
1. getstorybook

2. .storybook => configure stroy book

3. index.css => globale css file (imported inside config.js)

4. preview-head => css file that contains all style (reconized defaultly by stroybook)

```js
https://storybook.js.org/configurations/add-custom-head-tags/
```

5.knob : lets dynamically change component on story.

6. /components => react component (define proptype)

7. /stories => story components documentation
a. .jsx => component how it is invoked =
```js
  <Button
    type={text('Type', 'button')}
    size={OptionalSelect('Size', ButtonData.sizeOptions, '')}
    context={OptionalSelect('Context', ButtonData.contextOptions, 'default')}
    group={boolean('Group', false)}
    onClick={action('button_clicked')}
    className={text('ClassName', '')}
    style={object('Style', {})}
  >
    Hello Button !
  </Button>
```
b. readme of the component :
```js
The `<Button>` component wraps any arbitrary components or JSX markup into a clickable button. The component also accepts any other props you would like to pass in, for example, `title="my button"`.
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
