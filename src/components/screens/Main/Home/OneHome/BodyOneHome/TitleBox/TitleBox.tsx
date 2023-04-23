import { FC } from "react"
import { Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"

interface Props {
	title: string
	price: number
}

const TitleBox: FC<Props> = ({ title, price }) => {
	return (
		<Stack>
			<Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
				{title}
			</Typography>
			<Typography color="primary" sx={{ fontSize: "16px", fontWeight: 500 }}>
				{numberWithSpaces(price)}KZT
			</Typography>
		</Stack>
	)
}

export default TitleBox
