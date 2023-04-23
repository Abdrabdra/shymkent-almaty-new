import { FC, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { useTypedSelector } from "@store/index"
import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import Main from "./Main/Main"
import ContentSkeleton from "./ContentSkeleton"
import InfoStats from "@components/modules/InfoStat/InfoStat"
import ContentListPagination from "./ContentListPagination"

interface Props {
	forArchive?: boolean
	forMyAnnouncements?: boolean
	getCounts?: (value: number) => void
	withoutPagination?: boolean
}

const ContentList: FC<Props> = ({
	forArchive,
	forMyAnnouncements,
	getCounts,
	withoutPagination
}) => {
	const filterValues = useTypedSelector((state) => state.filter.values)
	const queryWithFilterParams = {
		...filterValues
	}

	const { data, isLoading, isFetching, isSuccess } = useGetAnnouncementsQuery(
		queryWithFilterParams,
		{
			refetchOnMountOrArgChange: true
		}
	)

	useEffect(() => {
		if (isSuccess) {
			getCounts && getCounts(data.count)
		}
	}, [data])

	return (
		<Stack spacing={1.5}>
			{isLoading ? (
				<ContentSkeleton />
			) : isSuccess ? (
				data.count === 0 ? (
					<Typography>Нет Объявлений</Typography>
				) : (
					<>
						{data.data.map((car) => (
							<Box
								key={car.id}
								sx={{
									height: "146px",
									backgroundColor: "common.white",
									borderRadius: "10px"
								}}
							>
								<Main car={car} />
								<InfoStats views={car.views} publishDate={car.createdAt} />
							</Box>
						))}
						{withoutPagination ? null : (
							<ContentListPagination count={data.count} />
						)}
					</>
				)
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ContentList
