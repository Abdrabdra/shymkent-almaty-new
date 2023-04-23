import { Box, Container, Stack } from "@mui/material"
import ChatRow from "./ChatRow"

const data = [
	{
		id: 0,
		car: "Lexus LF LC 500",
		name: "Акжол"
	},
	{
		id: 1,
		car: "Lexus LF LC 500",
		name: "Акжол"
	},
	{
		id: 2,
		car: "Lexus LF LC 500",
		name: "Акжол"
	},
	{
		id: 3,
		car: "Lexus LF LC 500",
		name: "Акжол"
	},
	{
		id: 4,
		car: "Lexus LF LC 500",
		name: "Акжол"
	}
]

const ChatList = () => {
	return (
		<Box>
			<Container>
				<Stack spacing={1}>
					{data.map((row, index) => (
						<ChatRow data={row} key={index} />
					))}
				</Stack>
			</Container>
		</Box>
	)
}

export default ChatList
