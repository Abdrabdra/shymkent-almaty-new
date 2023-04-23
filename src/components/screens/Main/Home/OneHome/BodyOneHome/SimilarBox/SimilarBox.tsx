import { Box, Stack, Typography, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import OneSimilar from "./OneSimilar"

const data = [
	{
		value: "asdf"
	},
	{
		value: "asdf"
	},
	{
		value: "asdf"
	}
]

const SimilarBox = () => {
	const is380 = useMediaQuery("(min-width: 380px)")
	const is450 = useMediaQuery("(min-width: 450px)")
	const is550 = useMediaQuery("(min-width: 550px)")
	const is650 = useMediaQuery("(min-width: 650px)")

	return (
		<Stack spacing={1}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "16px",
					lineHeight: "19.6px"
				}}
			>
				Похожие объявление
			</Typography>
			<Swiper
				slidesPerView={is650 ? 3.5 : is550 ? 3 : is450 ? 2.5 : is380 ? 2 : 1.5}
				spaceBetween={12}
				className="SimilarSwiper"
			>
				{data.map((row, index) => (
					<SwiperSlide key={index}>
						<OneSimilar />
					</SwiperSlide>
				))}
			</Swiper>
		</Stack>
	)
}

export default SimilarBox
