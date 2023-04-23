// library
import React, { useEffect, useRef } from "react"
import {
	Box,
	Button,
	CircularProgress,
	Container,
	Stack,
	Typography
} from "@mui/material"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { registration } from "@store/reducers/auth/auth.action"
import { IRegistration } from "../../../../types/IRegistration"

import AuthBg from "@assets/images/Auth/auth_bg.png"

import { useTypedSelector } from "../../../../store"
import { StyledNewInput } from "../../../ui/Input"
import { ActionsEnum } from "../../../../store/enum"
import { LoginSchema } from "@utils/schema/validation"

const Registration: React.FC = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/auth/login`)
	}

	const dispatch = useDispatch()
	const { status } = useTypedSelector((state) => state.auth)

	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			password: ""
		},
		onSubmit: async (values) => {
			// @ts-ignore
			dispatch(registration(values as IRegistration))
		},
		validationSchema: LoginSchema
	})

	const { values, errors, handleChange, handleSubmit } = formik
	const { phone, password, name } = values

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	}, [])

	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "secondary.100",
					borderBottomLeftRadius: "70px",
					borderBottomRightRadius: "70px"
				}}
			>
				<Typography variant="h6" align="center" sx={{ color: "common.white" }}>
					Auto Like
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<img src={AuthBg} alt={"Auth Background"} />
				</Box>
			</Box>
			<Container>
				<Stack sx={{ padding: "20px" }}>
					<Typography align="center">Регистрация в taxtaxi.KZ</Typography>
					<form onSubmit={handleSubmit}>
						<>
							<Stack>
								<Typography>Имя</Typography>
								<StyledNewInput
									ref={inputRef}
									name="name"
									value={name}
									required
									onChange={handleChange}
									placeholder="Имя"
								/>
								{errors.name && <Typography>{errors.name}</Typography>}
							</Stack>
							<Stack>
								<Typography>Номер телефона</Typography>
								<StyledNewInput
									ref={inputRef}
									name="phone"
									value={phone}
									required
									onChange={handleChange}
									placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
								/>
								{errors.phone && <Typography>{errors.phone}</Typography>}
							</Stack>
							<Stack>
								<Typography>Пароль</Typography>
								<StyledNewInput
									id="my-input"
									aria-describedby="my-helper-text"
									name="password"
									type="password"
									value={password}
									onChange={handleChange}
									placeholder="Введите пароль"
									autoComplete=""
								/>
								{errors.password && <Typography>{errors.password}</Typography>}
							</Stack>
							<Button
								variant="contained"
								color="primary"
								disabled={status === ActionsEnum.LOADING}
								startIcon={
									status === ActionsEnum.LOADING && (
										<CircularProgress sx={{ color: "#FFF" }} />
									)
								}
								type="submit"
							>
								Регистрироваться
							</Button>

							<Typography>
								Есть аккаунт?{" "}
								<Button onClick={() => handleClick()}>Войти</Button>
							</Typography>
						</>
					</form>
				</Stack>
			</Container>
		</Box>
	)
}

export default Registration
