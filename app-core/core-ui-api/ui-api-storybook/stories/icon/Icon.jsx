import React from "react";
import { boolean } from "@storybook/addon-knobs";

import UIKit from "../../..";
import Readme from "./README.md";

// Icon settings
const { IconOptions, OptionalSelect, Components } = UIKit;
const { Icon } = Components;
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
