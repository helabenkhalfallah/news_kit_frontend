import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import UIUtils from "../../..";
import Readme from "./README.md";

// import settings
const {
  ButtonOptions,
  ButtonIconOptions,
  OptionalSelect,
  Components
} = UIUtils;
const { ButtonIcon } = Components;

// button settings
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

// button icon settings
const { iconsOptions } = ButtonIconOptions;

const Component = () => (
  <ButtonIcon
    label={text("Label", "Click me !")}
    icon={OptionalSelect("Icon", iconsOptions, "edit")}
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
    textAlign={OptionalSelect("Text Align", textAlignsOptions, "center")}
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
    onClick={action("button_clicked")}
  />
);

export default [Readme, Component];
