import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import AppCore from '../app-core/commons'

const {
  withApollo,
} = AppCore

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
}

class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </ThemeProvider>
    )
  }
}

export default withApollo(NewsApp)
