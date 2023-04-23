import { useEffect, useRef, useState } from "react"
import { Box, Container } from "@mui/material"
import axios from "axios"

const ChatOne = () => {
	const [messages, setMessages] = useState([])
	const [value, setValue] = useState("")
	const socket = useRef()

	// useEffect(() => {
	// 	socket.current = new WebSocket("ws://localhost:3000")

	// 	socket.current.onopen = () => {}

	// 	socket.current.onmessage = () => {}
	// }, [])

	// const sendMessage = async () => {
	// 	await axios.post("http://localhost:3000/new-messages", {
	// 		messages: value,
	// 		id: Date.now()
	// 	})
	// }

	return (
		<Box>
			<Container>ChatOne</Container>
		</Box>
	)
}

export default ChatOne
