import { Box, Typography } from "@mui/material"

import ContentList from "./ContentList"

const Content = () => {
	return (
		<Box>
			<Typography variant="h4" my={1}>
				Объявления
			</Typography>
			<ContentList withoutPagination />
		</Box>
	)
}

export default Content
