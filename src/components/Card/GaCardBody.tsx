import CardContent from "@mui/material/CardContent";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const GaCardBody: React.FC<Props> = ({ children }) => {
  return <CardContent sx={{paddingBlock:0}}>{children}</CardContent>;
};

export default GaCardBody;
