import React from 'react'
import {
  text,
  boolean,
} from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import Components from '../../../ui-api'
import UIUtils from '../../../ui-api-utils'
import Readme from './README.md'

// side menu settings
const { OptionalSelect } = UIUtils
const { SideMenu } = Components

const Component = () => (
  <SideMenu
    className={text('ClassName', '')}
    open={boolean('Open', false)}
  >
    I am a SideMenu, test me !
  </SideMenu>
)

export default [Readme, Component]
