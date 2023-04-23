import { FC } from "react"
import { Stack } from "@mui/material"
import { useDispatch } from "react-redux"

import { useGetModelQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"

import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedMark
} from "@store/reducers/stepper/stepper.slice"

import BrandSkeleton from "../../PostSelectBrand/BrandList/BrandSkeleton"
import BrandOne from "../../PostSelectBrand/BrandList/BrandOne"

interface Props {
	searchValue?: string
}

const ModelList: FC<Props> = ({ searchValue }) => {
	const dispatch = useDispatch()
	const selectedMark = useTypedSelector(
		(state) => state.stepper.form.selectedMark
	)

	const queryParams = {
		title: searchValue ? searchValue : undefined
	}

	const { data, isLoading, isSuccess } = useGetModelQuery(queryParams)

	const handleSelect = (id: number) => {
		setTimeout(() => {
			dispatch(setFormSelectedMark(id))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.25}>
			{isLoading ? (
				<BrandSkeleton />
			) : isSuccess ? (
				data.data.map((row) => (
					<BrandOne
						key={row.id}
						data={row}
						handleSelect={handleSelect}
						selectedBrand={selectedMark ? selectedMark : undefined}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ModelList
