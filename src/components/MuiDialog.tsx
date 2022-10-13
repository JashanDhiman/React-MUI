import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">Are sure wanna make this happen!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MuiDialog;
