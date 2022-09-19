import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log({ checked });
  return (
    <>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch checked={checked} onChange={handleChange} color="success" />
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              value="html"
              control={<Switch checked={checked} onChange={handleChange} />}
            />
            <FormControlLabel
              label="css"
              value="css"
              control={<Switch checked={checked} onChange={handleChange} />}
            />
            <FormControlLabel
              label="js"
              value="js"
              control={<Switch checked={checked} onChange={handleChange} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default MuiSwitch;
