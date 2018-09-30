import * as React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
} from 'react-sketchapp'

import {
  fonts,
  spacing,
} from '../../../designSystem'


/* eslint-disable react/jsx-filename-extension */
const Header = ({ title, flex }) => (
  <View style={
    {
      flex,
      backgroundColor: 'red',
      width: '100%',
    }
  }
  >
    <Text style={fonts['Title 2']}>{title}</Text>
  </View>
)

// prop type validation
Header.propTypes = {
  flex: PropTypes.number,
  title: PropTypes.string,
}

// default prop
Header.defaultProps = {
  flex: 1,
  title: '',
}

export default Header
