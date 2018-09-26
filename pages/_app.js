import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import React from 'react'

import withApollo from '../lib/apollo/withApollo'

class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return <Container>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  }
}

export default withApollo(NewsApp)