import { Icon } from "@mui/material";
import React from "react";
import IconColor from "./icon-color";
import IconSize from "./icon-size";

type Props = {
  children: React.ReactNode;
  color?: IconColor;
  fontSize?: IconSize;
};

const GaIcon: React.FC<Props> = ({
  children,
  color = IconColor.INHERIT,
  fontSize = IconSize.MEDIUM,
}) => {
  return (
    <Icon color={color} fontSize={fontSize}>
      {children}
    </Icon>
  );
};

export default GaIcon;
