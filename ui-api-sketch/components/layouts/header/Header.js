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


const Header = ({ title }) => (
  <View style={{ marginBottom: spacing }}>
    <Text style={fonts['Title 2']}>{title}</Text>
  </View>
)

// prop type validation
Header.propTypes = {
  title: PropTypes.string,
}

// default prop
Header.defaultProps = {
  title: '',
}

export default Header