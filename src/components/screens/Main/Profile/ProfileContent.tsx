import { Button, Stack } from "@mui/material"
import { useDispatch } from "react-redux"

import { logout } from "@store/reducers/auth/auth.action"

import ProfileAnnouncements from "./ProfileAnnouncements"
import ProfileInfo from "./ProfileInfo"
import ProfileSettings from "./ProfileSettings"
import ProfileStatistics from "./ProfileStatistics"
import { AppDispatch } from "@store/index"
import { resetStepper } from "@store/reducers/stepper/stepper.slice"
import { useNavigate } from "react-router-dom"

const ProfileContent = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const handleLogOut = () => {
		dispatch(resetStepper())
		dispatch(logout())
		navigate("/app")
	}

	return (
		<Stack spacing={2.5}>
			<ProfileInfo />

			<Stack direction="row" spacing={2.5}>
				<ProfileStatistics />
				<ProfileSettings />
			</Stack>

			<ProfileAnnouncements />

			<Button onClick={handleLogOut} variant="outlined" color="error">
				Выйти
			</Button>
		</Stack>
	)
}

export default ProfileContent
