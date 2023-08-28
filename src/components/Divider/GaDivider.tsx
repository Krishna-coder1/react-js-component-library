import React, { ElementType } from "react";
import Divider from "@mui/material/Divider";
import dividerOrientation from "./divider-orientation";

type Props = {
  component: ElementType;
  flexItem?: boolean;
  dividerOrientation?: dividerOrientation;
};

const GaDivider: React.FC<Props> = ({
  component,
  flexItem,
  dividerOrientation,
}) => {
  return (
    <Divider
      orientation={dividerOrientation}
      component={component}
      flexItem={flexItem}
    />
  );
};

export default GaDivider;
