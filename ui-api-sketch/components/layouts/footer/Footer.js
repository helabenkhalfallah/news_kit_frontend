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
/* eslint-disable react/jsx-filename-extension */
const Footer = ({ title, flex }) => (
  <View style={
    {
      backgroundColor: 'hotPink',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      flex,
      width: '100%',
    }
  }
  >
    {title}
    {Footers.map((item) => {
      const { Flex, FooterView } = item
      return (
        <FooterView
          key={FooterView}
          flex={Flex}
        />
      )
    })}
  </View>
)

Footer.propTypes = {
  flex: PropTypes.number,
  title: PropTypes.string,
}

// default prop
Footer.defaultProps = {
  flex: 1,
  title: '',
}

export default Footer
