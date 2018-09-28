import React from 'react'
import {
  text,
  boolean,
  object,
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OptionalSelect from '../../lib/OptionalSelect'

import Button from '../../components/Button'
import Readme from './README.md'

const sizeOptions = {
  xs: 'xs',
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}

const contextOptions = {
  default: 'default',
  outline: 'outline',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  info: 'info',
  danger: 'danger',
}

const Component = () => (
  <Button
    type={text('Type', 'button')}
    size={OptionalSelect('Size', sizeOptions, '')}
    context={OptionalSelect('Context', contextOptions, 'default')}
    group={boolean('Group', false)}
    onClick={action('button_clicked')}
    className={text('ClassName', '')}
    style={object('Style', {})}
  >
    <i className="fa fa-check -m-r-2" />
    Great Success
  </Button>
)


export default [Readme, Component]
