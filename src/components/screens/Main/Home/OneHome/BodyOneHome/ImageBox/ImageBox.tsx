import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { RootState, useTypedSelector } from "@store/index"
import { FC } from "react"
import ImageBoxOne from "./ImageBoxOne"
import { $image_api } from "api"
import { IOneImage } from "types/Announcement/OneAnnouncement.type"

const banners = [
	{
		title: "Avto Like запустился",
		text: "Покупайте автомобили через наше приложение Avto-Like.kz"
	},
	{
		title: "Buy Jer запустился",
		text: "Покупайте недвижимость через наше приложение BuyJer.kz"
	},
	{
		title: "MarketPlace запустился",
		text: "Покупайте все что угодно через наше приложение MarketPlace.kz"
	}
]

interface Props {
	images?: IOneImage[]
	forPreview?: boolean
}

const ImageBox: FC<Props> = ({ images, forPreview }) => {
	const selectedImages = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedPicture
	)

	return (
		<Box sx={{ backgroundColor: "grey.0" }}>
			<Swiper spaceBetween={50} slidesPerView={1} loop={true}>
				{forPreview
					? selectedImages.map((row, index) => (
							<SwiperSlide key={index}>
								<ImageBoxOne image={row} />
							</SwiperSlide>
					  ))
					: images?.map((row, index) => (
							<SwiperSlide key={index}>
								<Box
									component={"img"}
									src={`${$image_api}${row.image}`}
									sx={{
										width: "100%",
										height: "200px",
										borderRadius: "20px",
										backgroundColor: "secondary.200",
										backgroundRepeat: "no-repeat",
										objectFit: "cover",
										objectPosition: "center"
									}}
								/>
							</SwiperSlide>
					  ))}
			</Swiper>
		</Box>
	)
}
export default ImageBox
