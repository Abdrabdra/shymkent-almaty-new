import {  IconButton, Stack, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ShareIcon from "@mui/icons-material/Share";

const LikeButtons = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={1.4}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton color="primary" sx={{ padding: 0 }}>
            <FavoriteBorderIcon />
          </IconButton>
          <Typography color="primary">134</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton color="primary" sx={{ padding: 0 }}>
            <QuestionAnswerOutlinedIcon />
          </IconButton>
          <Typography color="primary">13</Typography>
        </Stack>
      </Stack>
      <IconButton color="primary">
        <ShareIcon />
      </IconButton>
    </Stack>
  );
};

export default LikeButtons;
