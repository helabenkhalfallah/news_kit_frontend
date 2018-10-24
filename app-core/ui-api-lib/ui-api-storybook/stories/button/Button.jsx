import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import UIUtils from "../../..";
import Readme from "./README.md";

// button settings
const { ButtonOptions, OptionalSelect, Components } = UIUtils;
const { Button } = Components;
const {
  intentsOptions,
  sizeOptions,
  stylesOptions,
  shapesOptions,
  fontStylesOptions,
  fontWeightsOptions,
  textTransformsOptions,
  textAlignsOptions
} = ButtonOptions;

const Component = () => (
  <Button
    title={text("Title", "Click me !")}
    buttonStyle={OptionalSelect("Style", stylesOptions, "fill")}
    buttonShape={OptionalSelect("Shape", shapesOptions, "rectangle")}
    buttonIntent={OptionalSelect("Intent", intentsOptions, "default")}
    buttonSize={OptionalSelect("Size", sizeOptions, "normal")}
    fontStyle={OptionalSelect("Font Style", fontStylesOptions, "normal")}
    fontWeight={OptionalSelect("Font Weight", fontWeightsOptions, "normal")}
    textTransform={OptionalSelect(
      "Text Transform",
      textTransformsOptions,
      "none"
    )}
    textAlign={OptionalSelect("Text Align", textAlignsOptions, "left")}
    disabled={boolean("Disabled", false)}
    onClick={action("button_clicked")}
  />
);

export default [Readme, Component];
