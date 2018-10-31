import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";

import AppCore from "../app-core/commons";
import AppSettings from "../app-settings";

const { withApollo } = AppCore;
const { ThemeManager } = AppSettings;
const { AppTheme, ThemeProvider } = ThemeManager;

/**
 * App
 */
class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ThemeProvider value={AppTheme}>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withApollo(NewsApp);
