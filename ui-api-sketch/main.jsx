import * as React from 'react'
import {
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
      <Components.Header title="Login" />
      <Components.Container />
      <Components.Footer />
    </Artboard>
  </Page >
)

export default () => {
  render(<App />, context.document.currentPage())
}
