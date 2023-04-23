import { Box, OutlinedInput, Stack, Typography } from "@mui/material"

import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedContactName,
	setFormSelectedContactNumber
} from "@store/reducers/stepper/stepper.slice"

import { Form, Formik } from "formik"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import * as Yup from "yup"

const phoneRegExp =
	/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const Schema = Yup.object().shape({
	selectedContactName: Yup.string()
		.typeError("Введите буквы")
		.required("Имя обязательна"),

	selectedContactNumber: Yup.string()
		.matches(phoneRegExp, "Номер не валидный")
		.required("Имя обязательна")
})

const PostSelectContacts = () => {
	const dispatch = useDispatch()

	const selectedContactName = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedContactName
	)
	const selectedContactNumber = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedContactNumber
	)

	return (
		<Formik
			initialValues={{
				selectedContactName: selectedContactName,
				selectedContactNumber: selectedContactNumber
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedContactName(values.selectedContactName))
					dispatch(setFormSelectedContactNumber(values.selectedContactNumber))
					dispatch(incrementStep())
				}, 250)
			}}
			validationSchema={Schema}
		>
			{({ values, errors, handleChange }) => (
				<Form>
					<Stack spacing={1}>
						<Stack
							spacing={1}
							sx={{
								backgroundColor: "common.white",
								borderRadius: "10px",
								padding: "14px 15px 14px 20px"
							}}
						>
							<Typography>Имя</Typography>
							<OutlinedInput
								name={"selectedContactName"}
								value={values.selectedContactName}
								onChange={handleChange}
								placeholder="Имя"
								sx={{
									flex: 1,
									paddingLeft: "18px",
									backgroundColor: "common.white",
									borderRadius: "10px",
									input: {
										paddingLeft: "0"
									}
								}}
							/>
							{errors.selectedContactName && (
								<Typography sx={{ color: "red" }}>
									{errors.selectedContactName}
								</Typography>
							)}
						</Stack>
						<Stack
							spacing={1}
							sx={{
								backgroundColor: "common.white",
								borderRadius: "10px",
								padding: "14px 15px 14px 20px"
							}}
						>
							<Typography>Телефон</Typography>
							<OutlinedInput
								name={"selectedContactNumber"}
								value={values.selectedContactNumber}
								onChange={handleChange}
								placeholder="Номер Телефона"
								sx={{
									flex: 1,
									paddingLeft: "18px",
									backgroundColor: "common.white",
									borderRadius: "10px",
									input: {
										paddingLeft: "0"
									}
								}}
							/>
							{errors.selectedContactNumber && (
								<Typography sx={{ color: "red" }}>
									{errors.selectedContactNumber}
								</Typography>
							)}
						</Stack>
					</Stack>
					<Box>
						<AbsoluteBox>
							<SubmitButton type="submit" />
						</AbsoluteBox>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default PostSelectContacts
