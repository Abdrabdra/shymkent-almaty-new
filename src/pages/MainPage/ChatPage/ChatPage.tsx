import { Navigate, Route, Routes } from "react-router-dom"

import { ChatList, ChatOne } from "@components/screens/Main"

const ChatPage = () => (
	<>
		<Routes>
			<Route>
				<Route index element={<ChatList />} />
				<Route path="one" element={<Navigate to="/" />} />
				<Route path="one/:chatId" element={<ChatOne />} />

				<Route path="*" element={<ChatList />} />
			</Route>
		</Routes>
	</>
)

export default ChatPage
