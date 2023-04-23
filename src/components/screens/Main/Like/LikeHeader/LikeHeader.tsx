import {  Button, Container, Stack, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LikeHeader = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1.5} alignItems="center">
          <PersonIcon />
          <Typography>Lexus LF LC 500</Typography>
        </Stack>
        <Button>
          Купить <ArrowForwardIosIcon />
        </Button>
      </Stack>
    </Container>
  );
};

export default LikeHeader;
