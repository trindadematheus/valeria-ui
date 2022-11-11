import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@valeria-ui/core";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    fill: {
      options: ["normal", "outline", "ghost"],
      control: { type: "radio" },
    },
    size: {
      options: ["normal", "medium"],
      control: { type: "radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Default.args = {
  children: "continuar",
};
