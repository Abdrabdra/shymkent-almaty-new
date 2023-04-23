import ContentList from "@components/screens/Main/Home/MainHome/Announcement/Content/ContentList"
import { Container, Stack, Typography } from "@mui/material"

const ProfileAnnouncementsPage = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Мои объявления
				</Typography>

				<ContentList forMyAnnouncements />
			</Stack>
		</Container>
	)
}

export default ProfileAnnouncementsPage
