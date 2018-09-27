import * as React from 'react'
import PropTypes from 'prop-types'
import {
  RedBox,
  View,
  Text,
} from 'react-sketchapp'

import {
  fonts,
  spacing,
} from '../designSystem'


const ProfileCard = ({ user }) => (
  <View style={{ marginBottom: spacing }}>
    <Text style={fonts['Title 2']}>Salut</Text>
    {
      (user && user.name)
        ? (
          <Text style={fonts['Title 3']}>{user.name}</Text>
        )
        : (<RedBox error="Empty user name !" />)
    }
  </View>
)

// prop type validation
ProfileCard.propTypes = {
  user: PropTypes.object,
}

// default prop
ProfileCard.defaultProps = {
  user: null,
}

export default ProfileCard
