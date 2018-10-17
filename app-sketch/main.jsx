import * as React from "react";
import { render, Page, Document } from "react-sketchapp";
import Pages from "./pages";
import designSystem from "./design-system/designSystem";

const { Home } = Pages;

// app pages
export default context => {
  render(
    <Document system={designSystem}>
      <Page name="Home">
        <Home />
      </Page>
    </Document>,
    context.document
  );
};
