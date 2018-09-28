import React from 'react'
import {
  text,
  boolean,
  object,
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OptionalSelect from '../../lib/OptionalSelect'

import ButtonData from '../../data/ButtonData'
import Button from '../../components/Button'
import Readme from './README.md'


const Component = () => (
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
)


export default [Readme, Component]
