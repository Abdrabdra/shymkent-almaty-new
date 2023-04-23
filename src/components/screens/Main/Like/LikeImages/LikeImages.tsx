import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./LikeImages.style.scss";

const LikeImages = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ backgroundColor: "grey.0", width: "100%", maxWidth: "1200px" }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: "300px",
                  backgroundColor: "secondary.200",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default LikeImages;
