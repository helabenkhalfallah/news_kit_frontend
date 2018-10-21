import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import UIUtils from "../../..";
import Readme from "./README.md";

// button settings
const { ButtonOptions, OptionalSelect, Components } = UIUtils;
const { Button } = Components;
const {
  colorsOptions,
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
    className={text("ClassName", "")}
    buttonStyle={OptionalSelect("Button Style", stylesOptions, "container")}
    buttonShape={OptionalSelect("Button Shape", shapesOptions, "rectangle")}
    buttonColor={OptionalSelect("Button Color", colorsOptions, "default")}
    buttonSize={OptionalSelect("Button Size", sizeOptions, "normal")}
    fontStyle={OptionalSelect("Font Style", fontStylesOptions, "normal")}
    fontWeight={OptionalSelect("Font Weight", fontWeightsOptions, "normal")}
    textTransform={OptionalSelect(
      "Text Transform",
      textTransformsOptions,
      "none"
    )}
    textAlign={OptionalSelect("Text Align", textAlignsOptions, "center")}
    disabled={boolean("Disabled", false)}
    onClick={action("button_clicked")}
  >
    I am a Button, test meeeeeee !
  </Button>
);

export default [Readme, Component];
