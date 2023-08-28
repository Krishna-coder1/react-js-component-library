import CardActions from "@mui/material/CardActions";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const GaCardActions: React.FC<Props> = ({ children }) => {
  return <CardActions>{children}</CardActions>;
};

export default GaCardActions;
