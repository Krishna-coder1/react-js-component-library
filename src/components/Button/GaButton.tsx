import Button from "@mui/material/Button";
import React from "react";
import ButtonColor from "./button-color";
import ButtonSize from "./button-size";
import ButtonVariant from "./button-variant";
import GaTextColor from "./text-color";

type Props = {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick: (e: React.SyntheticEvent<Element, Event>) => void;
  textColor?: GaTextColor;
};

const GaButton: React.FC<Props> = ({
  children,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.CONTAINED,
  onClick,
  textColor = GaTextColor.WHITE,
}) => {
  return (
    <Button
      sx={{ color: textColor }}
      color={color}
      fullWidth
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default GaButton;
