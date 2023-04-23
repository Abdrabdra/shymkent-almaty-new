import { Box, CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import OneHomePreview from "@components/screens/Main/Home/OneHome/OneHomePreview"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setStepperError
} from "@store/reducers/stepper/stepper.slice"
import { useCreateAnnouncementMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import { WheelEnum } from "types/enums"
import { MainButton } from "@components/ui/Button"
import { useEffect } from "react"
import SuspenseLoader from "@components/modules/SuspenseLoader"

const PostPreview = () => {
	const dispatch = useDispatch()
	const [create, { isLoading, isError, isSuccess, error, reset }] =
		useCreateAnnouncementMutation()

	const stepper = useTypedSelector((state: RootState) => state.stepper.form)

	const data = {
		model: stepper.selectedMark,
		marka: stepper.selectedBrand,
		price: stepper.selectedPrice,
		description: "Описание",

		details: {
			city: stepper.selectedCity,
			generation: stepper.selectedGeneration,
			body: stepper.selectedCase,
			volume: stepper.selectedEngine,
			mileage: stepper.selectedMileage,
			transmission: 1, // тут из за бэка не могу взять трансмишшн
			driveUnit: stepper.selectedGear,
			steeringWheel: stepper.steeringWheel,
			color: "Цвет",
			customsClearance: stepper.selectedCustomsClearance,
			state: stepper.selectedCondition
		}
	}

	const formData = new FormData()

	formData.append("bodyTypeId", String(stepper.selectedCase))
	formData.append("cityId", String(stepper.selectedCity))
	formData.append("customsClearance", String(stepper.selectedCustomsClearance))
	formData.append("description", "Описание не задано")
	formData.append("driveUnit", String(stepper.selectedGear))
	formData.append("generationId", String(stepper.selectedGeneration))
	formData.append("markaId", String(stepper.selectedBrand))
	formData.append("mileage", String(stepper.selectedMileage).replace(/\s/g, ""))
	formData.append("modelId", String(stepper.selectedMark))
	formData.append("price", String(stepper.selectedPrice).replace(/\s/g, ""))
	formData.append("state", String(stepper.selectedCondition))
	formData.append(
		"steeringWheel",
		String(stepper?.steeringWheel ? stepper.steeringWheel : WheelEnum.LEFT)
	)
	formData.append("tags", String(stepper.selectedTags.join()))
	formData.append("transmissionId", String(1))
	formData.append("volume", String(3.5))
	formData.append("year", String(stepper.selectedManufacture))

	for (let i = 0; i < stepper.selectedPicture.length; i++) {
		formData.append("file", stepper.selectedPicture[i])
	}

	const handleClick = () => {
		create(formData)
	}

	useEffect(() => {
		if (isError) {
			handleError()
			reset()
		}
	}, [isError])

	useEffect(() => {
		if (isSuccess) {
			dispatch(setStepperError(null))
			handleSuccess()
			reset()
		}
	}, [isSuccess])

	const handleError = () => {
		dispatch(setStepperError(error))
		dispatch(incrementStep())
	}
	const handleSuccess = () => {
		dispatch(incrementStep())
	}

	return (
		<Box>
			<OneHomePreview data={data} />

			{isLoading && <Box>ЗАГРУЗКА...</Box>}
			{isSuccess && <Box>Успешно</Box>}

			<Box>
				<AbsoluteBox>
					<MainButton
						onClick={handleClick}
						disabled={isLoading}
						bgcolor="primary.main"
					>
						{isLoading && <CircularProgress sx={{ mr: "10px" }} />}
						Подтвердить
					</MainButton>
				</AbsoluteBox>
			</Box>
		</Box>
	)
}

export default PostPreview
