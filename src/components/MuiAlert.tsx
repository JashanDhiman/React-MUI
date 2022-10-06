import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">this is an error</Alert>
      <Alert severity="warning" variant="outlined">
        this is an error
      </Alert>
      <Alert severity="info" variant="filled">
        this is an error
      </Alert>
      <Alert severity="success">this is an error</Alert>
      <Alert severity="success">
        <AlertTitle>Jashan succed</AlertTitle>
        this is an error
      </Alert>
      <Alert severity="success" icon={<Check fontSize="large" />}>
        <AlertTitle>ICON</AlertTitle>
        Icon has changed
      </Alert>
      <Alert severity="success" icon={<Check fontSize="large" />} onClose={() => alert("close event trigered")}>
        <AlertTitle>ICON</AlertTitle>
        Icon has changed
      </Alert>
      <Alert severity="success" icon={<Check fontSize="large" />} action={<Button>Undo</Button>}>
        <AlertTitle>ICON</AlertTitle>
        Icon has changed
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
