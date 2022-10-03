import { Face } from "@mui/icons-material";
import { Chip, Stack, Avatar } from "@mui/material";
import React, { useState } from "react";

const MuiChips = () => {
  const [chips, setChips] = useState(["chips1", "chips2", "chips3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack>
      <Chip label="chip" color="primary" size="small" icon={<Face />} />
      <Chip label="chip outlined" color="primary" size="small" variant="outlined" avatar={<Avatar>V</Avatar>} />
      <Chip label="click" color="success" onClick={() => alert("clicked")} />
      <Chip label="delete" color="error" onClick={() => alert("clicked")} onDelete={() => alert("delete Handler called")} />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChips;
