import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import {
  ButtonOptions,
  ButtonIconOptions,
  OptionalSelect,
  ButtonIcon
} from "../../../..";
import Readme from "./README.md";

// button settings
const {
  intentsOptions,
  sizeOptions,
  stylesOptions,
  shapesOptions,
  fontStylesOptions,
  fontWeightsOptions,
  textTransformsOptions
} = ButtonOptions;

// button icon settings
const { iconsOptions, iconAlignsOptions } = ButtonIconOptions;

const Component = () => (
  <ButtonIcon
    label={text("Label", "Click me !")}
    icon={OptionalSelect("Icon", iconsOptions, "edit")}
    iconAlign={OptionalSelect("Icon Align", iconAlignsOptions, "left")}
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
    disabled={boolean("Disabled", false)}
    onClick={action("button_clicked")}
  />
);

export default [Readme, Component];
