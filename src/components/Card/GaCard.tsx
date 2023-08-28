import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardColor from "./card-color";
import CardType from "./card-type";
import GaCardVariant from "./card-variant";

type sxPropsType = {
  border?: number | string;
  borderColor?: CardColor;
  borderRadius?: number | string;
  padding?: number | string;
};
type Props = {
  children: React.ReactNode;
  cardType?: CardType;
  borderRadius?: string | number;
  variant?: GaCardVariant;
  raised?: boolean;
  onClick?: () => void;
};

const GaCard: React.FC<Props> = ({
  children,
  cardType = CardType.NORMAL_CARD,
  borderRadius = "4px",
  variant = GaCardVariant.ELEVATION,
  raised = false,
  onClick,
}) => {
  const [styles, setStyles] = useState<sxPropsType>({
    border: 1,
    borderColor: CardColor.INFO,
    borderRadius: borderRadius,
  });

  const handleStyles = () => {
    if (cardType == CardType.APPROVED_CARD) {
      styles.borderColor = CardColor.SUCCESS;
      setStyles({ ...styles });
    } else if (cardType == CardType.REJECTED_CARD) {
      styles.borderColor = CardColor.ERROR;
      setStyles({ ...styles });
    } else if (cardType == CardType.PENDING_CARD) {
      styles.borderColor = CardColor.WARNING;
      setStyles({ ...styles });
    } else if (cardType == CardType.NORMAL_CARD) {
      styles.borderColor = CardColor.INFO;
      styles.borderRadius = borderRadius;
      setStyles({ ...styles });
    } else if (cardType == CardType.BORDERLESS_CARD) {
      styles.border = 0;
      setStyles({ ...styles });
    }
  };

  useEffect(() => {
    handleStyles();
  }, [cardType]);

  return (
    <Card variant={variant} raised={raised} sx={styles} onClick={onClick}>
      {children}
    </Card>
  );
};

export default GaCard;
