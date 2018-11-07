import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "react-apollo";

import { ThemeManager, LanguageManager, withApollo } from "../app-core";

const { AppTheme, ThemeProvider } = ThemeManager;
const { AppLanguage, LanguageProvider } = LanguageManager;

/**
 * App
 */
class NewsApp extends App {
  constructor(props) {
    super(props);

    this.toggleTheme = newTheme => {
      this.setState({
        theme: newTheme
      });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: AppTheme,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <LanguageProvider value={AppLanguage}>
        <ThemeProvider value={this.state}>
          <Container>
            <ApolloProvider client={apolloClient}>
              <Head>
                <title>News Kit</title>
              </Head>
              <Component {...pageProps} />
            </ApolloProvider>
          </Container>
        </ThemeProvider>
      </LanguageProvider>
    );
  }
}

export default withApollo(NewsApp);
