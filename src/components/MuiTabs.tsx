import { Delete, Edit, Save } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";

const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList onChange={handleChange} centered variant="scrollable" scrollButtons={true}>
            <Tab label="Tab 1" value="1" icon={<Delete />} />
            <Tab label="Tab 2" value="2" icon={<Save />} disabled />
            <Tab label="Tab 3" value="3" icon={<Edit />} />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
