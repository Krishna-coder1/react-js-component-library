import Box from '@mui/material/Box';
import React from "react";
import BoxColors from "./box-colors";

type myProps = {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  component?: React.ElementType,
  bgColor?: BoxColors
};

const GaBox: React.FC<myProps> = ({
  height,
  width = 'fit-content',
  children,
  component,
  bgColor = BoxColors.WHITE
}) => {
  return (
    <Box
      
      width={width}
      height={height}
      bgcolor={bgColor}
      component={component}
      >
      {children}
      
    </Box>
  );
};

export default GaBox;
