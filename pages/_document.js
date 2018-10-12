import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Application Document
 */
export default class AppDocument extends Document {
  /**
   * initial propos
   * @param {*} param0
   */
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    /* eslint-disable*/
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  /**
   * render with styled component document template
   */
  render() {
    return (
      <html lang="en">
        <Head>
          <title>New Kit Page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
