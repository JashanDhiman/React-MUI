import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#fa">LInk</Link>
      <Typography variant="h6">
        <Link href="#fa" color={"secondary"} underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
