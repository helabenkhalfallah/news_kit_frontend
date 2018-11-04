import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { setConsoleOptions } from '@storybook/addon-console'

import './index.css'

// set console options
setConsoleOptions({
  panelExclude: [],
})

// settings
addDecorator(
  withInfo({
    maxPropsIntoLine: 1,
    name: 'News Kit',
    url: 'https://storybook.news-kit.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    inline: true,
    header: false,
    source: true,
    styles: (stylesheet) => {
      const style = {
        ...stylesheet,
        infoBody: {
          padding: '10px',
        },
      }
      return style
    }
  })
)

const req = require.context('..', true, /\.jsx$/)
const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)