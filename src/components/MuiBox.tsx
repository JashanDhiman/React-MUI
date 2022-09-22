import { Box, Divider, Stack } from "@mui/material";

const MuiBox = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "2rem",
          width: "2rem",
          padding: "1rem",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        hello jashan
      </Box>
      <Box
        display={"flex"}
        height="100px"
        width="fit-content"
        bgcolor="success.light"
        p={3}
      >
        jashan
      </Box>
    </Stack>
  );
};

export default MuiBox;
