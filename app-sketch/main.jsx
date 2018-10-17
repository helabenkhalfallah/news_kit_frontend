import * as React from "react";
import { render, Page, Document } from "react-sketchapp";
import Pages from "./pages";
import designSystem from "./design-system/designSystem";

const { Home, Signin } = Pages;

// app pages
export default context => {
  render(
    <Document system={designSystem}>
      <Page name="Signin">
        <Signin />
      </Page>
      <Page name="Home">
        <Home />
      </Page>
    </Document>
  );
};
