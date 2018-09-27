import * as React from 'react'
import {
  Page,
  Artboard,
  render,
  Text,
  View,
} from 'react-sketchapp'
import {
  fonts,
  spacing,
} from './designSystem'
import ProfileCard from './components/ProfileCard'

const user = {
  name: '- ̗̀Jackie ̖́-',
  screen_name: 'jackiesaik',
  description:
    'Graphic designer, never won a spelling be. Toronto on weekdays. Go Home Lake on weekends. ╮ (. ● ᴗ ●.) ╭',
  location: 'Toronto, ON',
  url: 'cargocollective.com/jackiesaik',
  profile_image_url:
    'https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg',
}

const Home = () => (
  <Page name="Mobile">
    <Artboard>
      <View>
        <Text style={fonts['Title 1']}>Profile Cards</Text>
        <ProfileCard user={user} h={spacing} v={spacing} />
      </View>
    </Artboard>
  </Page>
)

export default () => {
  render(<Home />, context.document.currentPage())
}
