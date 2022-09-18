import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import React, { useState } from "react";

const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<String[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  console.log({ skills });
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accespt terms and conditions"
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handleChange}
              color="secondary"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="css"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="js"
              value="js"
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
