import * as React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
} from 'react-sketchapp'

import {
  fonts,
  spacing,
} from '../../designSystem'


const Container = () => (
  <View style={{ marginBottom: spacing }}>
    <Text style={fonts['Title 2']}>Container</Text>
  </View>
)

// prop type validation
Container.propTypes = {

}

// default prop
Container.defaultProps = {

}

export default Container