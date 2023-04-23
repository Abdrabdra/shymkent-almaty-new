import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
	data: { id: number; car: string; name: string }
}

const ChatRow: FC<Props> = ({ data }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/app/chat/one/${data.id}`)
	}

	return (
		<Stack spacing={1}>
			<Stack
				direction="row"
				justifyContent={"space-between"}
				onClick={handleClick}
			>
				<Stack direction="row" spacing={2} alignItems="center">
					<Avatar sx={{ width: 65, height: 65 }}></Avatar>
					<Stack>
						<Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
							{data.car}
						</Typography>
						<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
							{data.name}
						</Typography>
					</Stack>
				</Stack>
				<Box>
					<Typography sx={{ color: "secondary.900", fontSize: "12px" }}>
						14:20
					</Typography>
				</Box>
			</Stack>
			<Divider variant={"middle"} />
		</Stack>
	)
}

export default ChatRow
