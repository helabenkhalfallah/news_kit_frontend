import { select } from "@storybook/addon-knobs/react";

const OptionalSelect = (...args) => {
  const [name, options, value] = [...args];
  return select(name, options, value);
};

export default OptionalSelect;
