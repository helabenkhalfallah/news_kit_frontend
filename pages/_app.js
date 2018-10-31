import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";

import AppSettings from "../app-settings";
import AppCore from "../app-core/commons";

const { AppTheme } = AppSettings;
const { withApollo } = AppCore;

/**
 * App
 */
class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <AppTheme>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </AppTheme>
    );
  }
}

export default withApollo(NewsApp);
