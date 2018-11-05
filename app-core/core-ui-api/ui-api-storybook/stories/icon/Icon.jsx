import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { IconOptions, OptionalSelect, Icon } from "../../../..";
import Readme from "./README.md";

// Icon settings
const {
  iconsOptions,
  intentOptions,
  backgroundOptions,
  sizeOptions
} = IconOptions;

const Component = () => (
  <Icon
    icon={OptionalSelect("Icon", iconsOptions, "edit")}
    intent={OptionalSelect("Intent", intentOptions, "default")}
    background={OptionalSelect("Background", backgroundOptions, "dark")}
    size={OptionalSelect("Size", sizeOptions, "normal")}
    disabled={boolean("Disabled", false)}
  />
);

export default [Readme, Component];
