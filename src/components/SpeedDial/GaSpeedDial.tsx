import React from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialDirection from "./speedDial-direction";


type data = {
  icon: JSX.Element,
  name: String
}

type myProps = {
  icons: data[];
  ariaLabel: string;
  speedDialIcon?: JSX.Element;
  direction?: SpeedDialDirection
};

const GaSpeedDial: React.FC<myProps> = ({
  icons,
  ariaLabel,
  speedDialIcon = <SpeedDialIcon />,
  direction = SpeedDialDirection.UP
}) => {
  return (
    <SpeedDial ariaLabel={ariaLabel} icon={speedDialIcon} direction={direction}>
      {icons.map((icon, key) => (
          <SpeedDialAction
            key={key}
            icon={icon.icon}
            tooltipTitle={icon.name}
          />
        ))} 
    </SpeedDial>
  );
};

export default GaSpeedDial;
