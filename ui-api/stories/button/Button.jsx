import React from 'react'
import {
  text,
  boolean,
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OptionalSelect from '../../lib/OptionalSelect'

import ButtonHelper from '../../lib/ButtonHelper'
import Components from '../../components/index'
import Readme from './README.md'

// button settings
const { Button } = Components
const {
  contextOptions,
  sizeOptions,
} = ButtonHelper

const Component = () => (
  <Button
    className={text('ClassName', '')}
    context={OptionalSelect('Context', contextOptions, 'default')}
    size={OptionalSelect('Size', sizeOptions, '')}
    type={text('Type', 'button')}
    group={boolean('Group', false)}
    onClick={action('button_clicked')}
  >
    I am a Button, test me !
  </Button>
)

export default [Readme, Component]
