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
const FooterInformation = ({ flex }) => (
  <View style={
    {
      flex,
    }
  }
  >
    <Text style={fonts['Title 2']}>FooterInformation</Text>
  </View>
)

FooterInformation.propTypes = {
  flex: PropTypes.number,
}

// default prop
FooterInformation.defaultProps = {
  flex: 1,
}

export default FooterInformation
