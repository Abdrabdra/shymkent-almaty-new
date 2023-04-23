import {
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import GoBackButton from "../../../Button/GoBackButton";

const TopOneHomeDrawer = ({ path }: any) => (
  <Stack
    direction="row"
    justifyContent={
      path === "/app/chat/one/:chatId" ? "flex-start" : "space-between"
    }
    alignItems={"center"}
    spacing={1.75}
    sx={{ width: "100%" }}
  >
    <GoBackButton forPost={false} />
    {path === "/app/home/one/:announceId" ? (
      <Button
        sx={{
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "12px",
        }}
      >
        <Icon component={ShareIcon} />
      </Button>
    ) : path === "/app/chat/one/:chatId" ? (
      <>
        <Divider
          variant="middle"
          orientation="vertical"
          sx={{ width: "1px", height: "26px", backgroundColor: "grey.800" }}
        />
        <Stack direction={"row"} spacing={2} alignItems="center">
          <Avatar sx={{ width: 32, height: 32, marginLeft: "8px" }}></Avatar>
          <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
            Акжол
          </Typography>
        </Stack>
      </>
    ) : (
      <Box />
    )}
  </Stack>
);

export default TopOneHomeDrawer;
