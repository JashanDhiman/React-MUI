import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary" max={99}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" invisible={false}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
