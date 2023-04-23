import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import ContentList from "../MainHome/Announcement/Content/ContentList"

const HomeCars = () => {
	const [counts, setCounts] = useState(0)

	const getCounts = (value: number) => {
		setCounts(value)
	}

	return (
		<Box>
			<Container>
				<Typography>{counts} объявлений</Typography>

				<ContentList getCounts={getCounts} />
			</Container>
		</Box>
	)
}

export default HomeCars
