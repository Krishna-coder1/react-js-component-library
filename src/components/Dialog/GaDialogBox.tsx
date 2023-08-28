import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DialogActions } from "@mui/material";
import React from "react";

type Props = {
  actionItem: React.ReactNode;
  handleClose: Function;
  openDialog: boolean;
  title?: string;
  content: React.ReactNode;
};
const GaDialogBox: React.FC<Props> = ({
  actionItem,
  openDialog = false,
  handleClose,
  title = "",
  content,
}) => {
  return (
    <Dialog open={openDialog} onClose={() => handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>{actionItem}</DialogActions>
    </Dialog>
  );
};
export default GaDialogBox;
