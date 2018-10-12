import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'


// ui lib
import Components from './stories'

// stories
const stories = storiesOf('UI Kit', module)
const { Button, SideMenu } = Components

// prepare story board
stories
  .addDecorator((story, context) => (story)(context))
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
  .add('SideMenu', withReadme(...SideMenu))
