import React from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { AppBar, Box, Grid, Tab, Tabs, TextField } from "@mui/material";
const Rough = () => {
  const AdminMenu = [
    {
      link: {
        url: "fadsf",
      },
    },
    {
      link: {
        url: "fadsf",
      },
    },
    {
      link: {
        url: "fadsf",
      },
    },
  ];
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        display: "flex",
        justifyContent: "space-betweeen",
        flexDirection: "row",
      }}
    >
      <Tabs
        value={"url"}
        indicatorColor="primary"
        textColor="primary"
        variant="standard"
        center
        aria-label="Dashboard tabs"
        sx={{ width: "min-content", backgroundColor: "transparent" }}
      >
        {AdminMenu.map((value, key) => {
          return (
            <Tab
              key={value.link.url}
              icon={<AddReactionIcon />}
              label={value.name}
              value={value.link.url}
              sx={{
                backgroundColor: "#E1EBEE !important",
              }}
            />
          );
        })}
      </Tabs>

      <Grid
        container
        spacing={1}
        sx={{
          mt: 1,
          mb: 1,
          pb: 1,
          maxWidth: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Grid item xs={2} md={1.9}>
          <TextField
            id="startDate"
            value={`1/12/2022`}
            label="Start Date"
            variant="outlined"
            sx={{
              width: "100%",
              "& fieldset": {
                borderRadius: "4px",
                width: "100%",
                border: "1px solid deepskyblue",
              },
              "& input": {
                color: "black",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "white",
              },
              "& input:focus": { border: "1px solid black" },
            }}
          />
        </Grid>
        <Grid item xs={2} md={1.9}>
          <TextField
            id="endDate"
            value={`1/12/2022`}
            label="End Date"
            variant="outlined"
            sx={{
              "& fieldset": {
                borderRadius: "4px",
                border: "1px solid deepskyblue",
              },
              "& input": {
                color: "black",
                borderRadius: "4px",
                backgroundColor: "white",
              },
              "& input:focus": { border: "1px solid black" },
            }}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Rough;
