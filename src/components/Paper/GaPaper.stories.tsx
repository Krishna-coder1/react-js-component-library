import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaPaper from "./GaPaper";
import PaperVariant from "./paper-variant";
import { Typography } from "@mui/material";

export default {
  title: "GaPaper",
  component: GaPaper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GaPaper>;

const Template: ComponentStory<typeof GaPaper> = (args) => (
  <GaPaper {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: PaperVariant.ELEVATED,
  square: true,
  elevation: 2,
  children: (
    <div style={{ padding: "2rem" }}>
      {" "}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        Lorem epsum werhiukjgh rwigh rhgrjk ghkerj hjwkehj ghwekjh gkjwhgekwj
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </div>
  ),
};
