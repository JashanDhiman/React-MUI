import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiToolTip = () => {
  return (
    <Tooltip title="Delete" placement="right-end" arrow enterDelay={500} leaveDelay={500}>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MuiToolTip;
