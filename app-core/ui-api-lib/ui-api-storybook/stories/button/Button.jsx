import React from "react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Components from "../../../ui-api";
import UIUtils from "../../../ui-api-utils";
import Readme from "./README.md";

// button settings
const { ButtonHelper, OptionalSelect } = UIUtils;
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
} = ButtonHelper;

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
    onClick={action("button_clicked")}
  >
    I am a Button, test meeeeeee !
  </Button>
);

export default [Readme, Component];
