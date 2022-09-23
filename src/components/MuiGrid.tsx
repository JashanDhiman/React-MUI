import { Box, Grid } from "@mui/material";

const MuiGrid = () => {
  return (
    <Grid container my={4} rowSpacing={1} columnSpacing={6}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          item 1
        </Box>
      </Grid>
      <Grid item xs={"auto"} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          item 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          item 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={"auto"}>
        <Box bgcolor="primary.light" p={2}>
          item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
