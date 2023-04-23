import { Box, Container, Stack } from "@mui/material"
import { FC } from "react"

import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"
import OptionBox from "./BodyOneHome/OptionBox"

interface Props {
	data: {
		model?: number
		marka?: number
		price?: number
		description?: string

		details: {
			city?: string
			generation?: string
			body?: string
			volume?: string
			mileage?: string
			transmission?: string
			driveUnit?: string
			steeringWheel?: string
			color?: string
			customsClearance?: string
			state?: string
		}
	}
}

const OneHomePreview: FC<any> = ({ data }) => {
	const details = {
		city: data.details.city ? data.details.city : "",
		generation: "Поколение",
		body: data?.details.body ? data.details.body : "",
		volume: data?.details.volume ? data.details.volume : "",
		mileage: data?.details.mileage ? data.details.mileage : "",
		transmission: "Коробка Передач",
		driveUnit: data?.details.driveUnit ? data.details.driveUnit : "",
		steeringWheel: data?.details.steeringWheel
			? data.details.steeringWheel
			: "",
		color: "Цвет",
		customsClearance: data?.details.customsClearance
			? data?.details.customsClearance
			: "",
		state: data?.details.state ? data.details.state : ""
	}

	return (
		<Box>
			<Container>
				<Stack spacing={2}>
					<ImageBox forPreview />
					<TagBox />
					<TitleBox title={`${data.marka} ${data.model}`} price={data.price} />
					<DoubleTab forPreview commentsCount={99} details={details} />
					<Description description={`${data.marka} ${data.model}`} />
					<OptionBox />
				</Stack>
			</Container>
		</Box>
	)
}

export default OneHomePreview
