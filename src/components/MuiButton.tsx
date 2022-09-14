import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";
const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | null>(null);
  console.log({ formats });
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          text
        </Button>
        <Button variant="contained" color="primary">
          contained
        </Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          contained
        </Button>
        <Button variant="contained" color="secondary">
          contained
        </Button>
        <Button variant="contained" color="error">
          contained
        </Button>
        <Button variant="contained" color="warning">
          contained
        </Button>
        <Button variant="contained" color="success">
          contained
        </Button>
        <Button variant="contained" color="info">
          contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small">
          contained
        </Button>
        <Button variant="contained" size="medium">
          contained
        </Button>
        <Button variant="contained" size="large">
          contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton
          arial-label="send"
          color="success"
          size="small"
          onClick={() => alert("send successfully")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          arial-label="text formating"
          value={formats}
          onChange={handleChange}
          exclusive
          color="success"
        >
          <ToggleButton value="bold" arial-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" arial-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" arial-label="underlined">
            <FormatUnderLinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
