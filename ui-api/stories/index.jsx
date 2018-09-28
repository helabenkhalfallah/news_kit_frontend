import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'

// ui lib
import Button from './button/Button'


// stories
const stories = storiesOf('News Kit', module)
const storyWrapper = story => (
  <div style={{ margin: '35px' }}>{story()}</div>
)


// prepare story board
stories
  .addDecorator((story, context) => (story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
