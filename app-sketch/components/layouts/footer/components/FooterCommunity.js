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
const FooterCommunity = ({ flex }) => (
  <View style={
    {
      flex,
    }
  }
  >
    <Text style={fonts['Title 2']}>FooterCommunity</Text>
  </View>
)

FooterCommunity.propTypes = {
  flex: PropTypes.number,
}

// default prop
FooterCommunity.defaultProps = {
  flex: 1,
}

export default FooterCommunity
