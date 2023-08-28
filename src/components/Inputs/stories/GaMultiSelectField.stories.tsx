import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaMultiSelectField from "../GaMultiSelectField";
import OutputValue from "../output-value";
import FieldSize from "../field-size";

export default {
  title: "GaMultiSelectField",
  component: GaMultiSelectField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GaMultiSelectField>;

const Template: ComponentStory<typeof GaMultiSelectField> = (args) => {
  return <GaMultiSelectField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
  value: ["value", "jfjgjg", "eklwjfkjr"],
  onChange: () => {},
  options: [
    { value: "option1", key: "op1" },
    { value: "option2", key: "op2" },
    { value: "option3", key: "op3" },
  ],
  outputValue: OutputValue.VALUE,
  isDisabled: false,
  error: false,
  helperText: "Helper text",
  size: FieldSize.MEDIUM,
};
