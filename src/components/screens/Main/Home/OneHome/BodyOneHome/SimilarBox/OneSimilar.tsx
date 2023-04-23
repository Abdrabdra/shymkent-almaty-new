import { Box, IconButton, Stack, Typography } from "@mui/material"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const OneSimilar = () => {
	return (
		<Stack
			sx={{
				width: "166px",
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "8px"
			}}
		>
			<Box
				sx={{
					height: "110px",
					backgroundColor: "black",
					borderRadius: "10px",
					marginBottom: "8px"
				}}
			/>
			<Typography
				sx={{
					color: "grey.800",
					fontWeight: 500,
					fontSize: "10px",
					lineHeight: "12.12px",
					marginBottom: "3px"
				}}
			>
				2022г.
			</Typography>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "12px",
					lineHeight: "14.7px",
					marginBottom: "5px"
				}}
			>
				Lexus LC 500
			</Typography>
			<Typography
				sx={{
					color: "primary.main",
					fontWeight: 500,
					fontSize: "14px",
					lineHeight: "16.98px",
					marginBottom: "12px"
				}}
			>
				21 000 000 KZT
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"}>
				<Typography
					sx={{
						color: "secondary.300",
						fontSize: "12px",
						fontWeight: 500,
						lineHeight: "20px"
					}}
				>
					Подробнее
				</Typography>
				<IconButton
					color={"primary"}
					sx={{
						width: "24px",
						height: "24px",
						backgroundColor: "secondary.300",
					}}
				>
					<ArrowForwardIosRoundedIcon sx={{ fontSize: "13px" }} />
				</IconButton>
			</Stack>
		</Stack>
	)
}

export default OneSimilar
