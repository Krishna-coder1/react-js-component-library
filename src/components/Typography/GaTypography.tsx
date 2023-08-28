import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyAlignment from "./typography-alignment";
import TypographyColor from "./typography-color";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TypographyType from "./typography-type";
import TypographySize from "./typography-size";
import TypographyWeight from "./typography-weight";
import TypographyStyle from "./typography-style";
import TypographyFamily from "./typography-family";

type stylePropsType = {
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  fontStyle?: string;
};

type Props = {
  children: React.ReactNode;
  align?: TypographyAlignment;
  color?: TypographyColor;
  typographyType?: TypographyType;
};

const GaTypography: React.FC<Props> = ({
  children,
  align = TypographyAlignment.INHERIT,
  typographyType = TypographyType.XS,
  color = TypographyColor.INHERIT,
}) => {
  const [font, setFont] = useState<stylePropsType>({
    fontSize: TypographySize.DEFAULT,
    fontWeight: TypographyWeight.FONT_WEIGHT_400,
    fontFamily: TypographyFamily.ROBOTO,
    fontStyle: TypographyStyle.NORMAL,
  });

  const handleFont = () => {
    switch (typographyType) {
      case TypographyType.XS:
        font.fontSize = TypographySize.XS;
        break;
      case TypographyType.XS_BOLD:
        font.fontSize = TypographySize.XS;
        font.fontWeight = TypographyWeight.FONT_WEIGHT_500;
        break;
      case TypographyType.SM:
        font.fontSize = TypographySize.SM;
        break;
      case TypographyType.SM_BOLD:
        font.fontSize = TypographySize.SM;
        font.fontWeight = TypographyWeight.FONT_WEIGHT_500;
        break;
      case TypographyType.BASE:
        font.fontSize = TypographySize.BASE;
        break;
      case TypographyType.BASE_BOLD:
        font.fontSize = TypographySize.BASE;
        font.fontWeight = TypographyWeight.FONT_WEIGHT_500;
        break;
      case TypographyType.LG:
        font.fontSize = TypographySize.LG;
        break;
      case TypographyType.LG_BOLD:
        font.fontSize = TypographySize.LG;
        font.fontWeight = TypographyWeight.FONT_WEIGHT_500;
        break;
      case TypographyType.XL:
        font.fontSize = TypographySize.XL;
        break;
      case TypographyType.XL_BOLD:
        font.fontSize = TypographySize.XL;
        font.fontWeight = TypographyWeight.FONT_WEIGHT_500;
        break;
      default:
        font.fontSize = TypographySize.DEFAULT;
    }
    setFont({ ...font });
  };


  useEffect(() => {
    handleFont();
  }, [typographyType]);
  return (
    <Typography
      align={align}
      fontSize={font.fontSize}
      fontWeight={font.fontWeight}
      fontFamily={font.fontFamily}
      fontStyle={font.fontStyle}
      color={color}
    >
      {children}
    </Typography>
  );
};

export default GaTypography;
