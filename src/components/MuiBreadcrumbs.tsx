import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      {/*<Breadcrumbs aria-label="breadcrumbs" separator="/">*/}
      <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNext fontSize="small" />} maxItems={2} itemsAfterCollapse={2} itemsBeforeCollapse={1}>
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catlog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
