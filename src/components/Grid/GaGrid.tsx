import { Grid, GridSpacing } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import React from "react";

type Props = {
  children: React.ReactNode;
  columns?: ResponsiveStyleValue<number>;
  spacing?: ResponsiveStyleValue<GridSpacing>;
  container?: boolean;
  lg?: "auto" | number | boolean;
  md?: "auto" | number | boolean;
  xl?: "auto" | number | boolean;
  xs?: "auto" | number | boolean;
  sm?: "auto" | number | boolean;
};

const GaGrid: React.FC<Props> = ({
  children,
  columns = 12,
  spacing = 0,
  container = false,
  lg = false,
  md = false,
  xl = false,
  xs = false,
  sm = false,
}) => {
  return (
    <Grid
      columns={columns}
      spacing={spacing}
      container={container}
      item={!container}
      lg={lg}
      md={md}
      xl={xl}
      xs={xs}
      sm={sm}
    >
      {children}
    </Grid>
  );
};
export default GaGrid;
