import { Box, Stack, TextField, Typography } from "@mui/material"

import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedPrice
} from "@store/reducers/stepper/stepper.slice"

import * as Yup from "yup"
import { Form, Formik } from "formik"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { NumericFormat } from "react-number-format"

const Schema = Yup.object().shape({
	selectedPrice: Yup.number()
		.typeError("Введите числа")
		.positive("Цена не может иметь отрицательные числа")
		.integer("Введите целое число")
		.max(999999999, "Должно быть не больше 9-ти чисел")
		// .min(1, "Должно быть больше одного числа")
		.required("Цена обязательна")
})

const PostSelectPrice = () => {
	const dispatch = useDispatch()

	const selectedPrice = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedPrice
	)

	return (
		<Formik
			initialValues={{
				selectedPrice: selectedPrice
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedPrice(values.selectedPrice))
					dispatch(incrementStep())
				}, 250)
			}}
			validationSchema={Schema}
		>
			{({ values, errors, handleChange, setFieldValue }) => (
				<Form>
					<Stack
						spacing={1}
						sx={{
							backgroundColor: "common.white",
							borderRadius: "10px",
							padding: "14px 15px 14px 20px"
						}}
					>
						<Typography>Цена</Typography>

						<NumericFormat
							value={values.selectedPrice}
							name={"selectedPrice"}
							type="text"
							onChange={handleChange}
							thousandSeparator=" "
							isAllowed={(values) => {
								const { value } = values
								return Number(value) <= 999999999
							}}
							customInput={TextField}
						/>
						{errors.selectedPrice && (
							<Typography color={"error"}>{errors.selectedPrice}</Typography>
						)}
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

export default PostSelectPrice
