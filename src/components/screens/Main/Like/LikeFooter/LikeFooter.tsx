import { Box, Container, Stack, Typography } from "@mui/material";
import LikeButtons from "./LikeButtons";

const LikeFooter = () => {
  return (
    <Box>
      <Container>
        <Stack justifyContent="space-between" sx={{ flex: "1" }}>
          <LikeButtons />
          <Typography sx={{ color: "grey.800", fontSize: "12px" }}>
            13 часов назад
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default LikeFooter;
