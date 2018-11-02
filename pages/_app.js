import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";

import AppCore from "../app-core/commons";
import AppSettings from "../app-settings";

const { withApollo } = AppCore;
const { ThemeManager, LanguageManager } = AppSettings;
const { AppTheme, ThemeProvider } = ThemeManager;
const { AppLanguage, LanguageProvider } = LanguageManager;

/**
 * App
 */
class NewsApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <LanguageProvider value={AppLanguage}>
        <ThemeProvider value={AppTheme}>
          <Container>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </Container>
        </ThemeProvider>
      </LanguageProvider>
    );
  }
}

export default withApollo(NewsApp);
