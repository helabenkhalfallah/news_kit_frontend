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


const FooterApplication = () => (
  <View>
    <Text style={fonts['Title 2']}>FooterApplication</Text>
  </View>
)

// prop type validation
FooterApplication.propTypes = {

}

// default prop
FooterApplication.defaultProps = {

}

export default FooterApplication