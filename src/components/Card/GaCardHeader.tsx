import { Avatar, CardHeader } from "@mui/material";
import React from "react";
import GaColor from "./card-color";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type Props = {
  avatarDisplay?: boolean;
  avatarletter?: string;
  avatarImage?: string;
  avatarBackGroundColor?: GaColor;
  actionItems?: React.ReactNode;
  header: React.ReactNode;
  subHeader?: React.ReactNode;
};

const GaCardHeader: React.FC<Props> = ({
  avatarletter = "",
  avatarImage = "",
  avatarBackGroundColor = GaColor.PRIMARY,
  actionItems,
  header = "",
  subHeader = "",
  avatarDisplay = false,
}) => {
  return (
    <CardHeader
      avatar={
        avatarDisplay ? (
          <Avatar
            sx={{ bgcolor: avatarBackGroundColor }}
            src={avatarImage}
            alt=""
          >
            {avatarletter}
          </Avatar>
        ) : (
          ""
        )
      }
      action={actionItems}
      title={header}
      subheader={subHeader}
    />
  );
};

export default GaCardHeader;
