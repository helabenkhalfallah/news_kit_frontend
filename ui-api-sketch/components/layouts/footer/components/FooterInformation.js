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


const FooterInformation = () => (
  <View>
    <Text style={fonts['Title 2']}>FooterInformation</Text>
  </View>
)

// prop type validation
FooterInformation.propTypes = {

}

// default prop
FooterInformation.defaultProps = {

}

export default FooterInformation