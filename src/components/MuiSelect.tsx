import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">US</MenuItem>
        <MenuItem value="AU">Austraia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
