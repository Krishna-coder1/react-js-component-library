import Paper from "@mui/material/Paper";
import React from "react";
import PaperVariant from "./paper-variant";

type Props = {
  children: React.ReactNode;
  variant?: PaperVariant;
  square?: boolean;
  elevation?: number;
};

const GaPaper: React.FC<Props> = ({ children, variant, square, elevation }) => {
  return (
    <Paper elevation={elevation} square={square} variant={variant}>
      {children}
    </Paper>
  );
};
export default GaPaper;
