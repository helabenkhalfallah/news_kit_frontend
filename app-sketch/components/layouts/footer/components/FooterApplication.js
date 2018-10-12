import * as React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
} from 'react-sketchapp'

import {
  fonts,
  spacing,
} from '../../../../designSystem'


/* eslint-disable react/jsx-filename-extension */
const FooterApplication = ({ flex }) => (
  <View style={
    {
      flex,
    }
  }
  >
    <Text style={fonts['Title 2']}>FooterApplication</Text>
  </View>
)

// prop type validation
FooterApplication.propTypes = {
  flex: PropTypes.number,
}

// default prop
FooterApplication.defaultProps = {
  flex: 1,
}

export default FooterApplication
