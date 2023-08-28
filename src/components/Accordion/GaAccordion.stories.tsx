import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaAccordion from "./GaAccordion";

export default {
  title: "GaAccordion",
  component: GaAccordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GaAccordion>;

const Template: ComponentStory<typeof GaAccordion> = (args) => (
  <GaAccordion {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  defaultExpanded: false,
  disabled: false,
  expanded: false,
  onChange: () => {},
  summary: "KAsak",
  details: "KASAJJJJJJ",
  elevation: 0,
};
