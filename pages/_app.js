import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";

import AppCore from "../app-core/commons";

const { withApollo } = AppCore;

/**
 * App
 */
class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(NewsApp);
