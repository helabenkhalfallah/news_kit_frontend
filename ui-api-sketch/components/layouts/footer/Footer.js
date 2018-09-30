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

// footer components
import Footers from './components/Footers'


// footer
const Footer = () => (
  <View style={
    {
      backgroundColor: 'hotPink',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }
  }
  >
    {Footers.map((item) => {
      const { Flex, FooterView } = item
      return (
        <FooterView
          key={FooterView}
          style={{
            flex: Flex,
          }}
        />
      )
    })}
  </View >
)

// prop type validation
Footer.propTypes = {

}

// default prop
Footer.defaultProps = {

}

export default Footer