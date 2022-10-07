import { Stack, Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar>BW</Avatar>
        <Avatar>CW</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar variant="square" src="https://randomuser.me/api/portraits/women/79.jpg" />
        <Avatar variant="rounded" src="https://randomuser.me/api/portraits/men/51.jpg" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/65.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/15.jpg" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
