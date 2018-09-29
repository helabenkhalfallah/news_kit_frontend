import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'

// ui lib
import Components from './index-stories'

// stories
const stories = storiesOf('News Kit', module)
const { Button } = Components

// prepare story board
stories
  .addDecorator((story, context) => (story)(context))
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
