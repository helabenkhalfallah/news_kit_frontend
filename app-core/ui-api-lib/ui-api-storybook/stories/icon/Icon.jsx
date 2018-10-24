import React from "react";
import { boolean } from "@storybook/addon-knobs";

import UIUtils from "../../..";
import Readme from "./README.md";

// Icon settings
const { IconOptions, OptionalSelect, Components } = UIUtils;
const { Icon } = Components;
const {
  iconsOptions,
  tintOptions,
  backgroundOptions,
  sizeOptions
} = IconOptions;

const Component = () => (
  <Icon
    icon={OptionalSelect("Icon", iconsOptions, "edit")}
    tint={OptionalSelect("Tint", tintOptions, "default")}
    background={OptionalSelect("Background", backgroundOptions, "default")}
    size={OptionalSelect("Size", sizeOptions, "normal")}
    disabled={boolean("Disabled", false)}
  />
);

export default [Readme, Component];
