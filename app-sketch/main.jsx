import * as React from 'react'
import {
  View,
  Page,
  Artboard,
  render,
} from 'react-sketchapp'

// components
import Components from './components'

// app pages
const App = () => (
  <Page name="News Kit">
    <Artboard name="Login">
      <View
        style={
          {
            backgroundColor: 'yellow',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            overflow: 'hidden',
            width: '1280px',
            height: '1280px',
          }
        }
      >
        <Components.Header title="Header" flex="1" />
        <Components.Container title="Container" flex="1" />
        <Components.Footer title="Footer" flex="1" />
      </View>
    </Artboard>
  </Page>
)

export default () => {
  render(<App />, context.document.currentPage())
}
