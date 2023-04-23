import { createSlice } from "@reduxjs/toolkit"
import { ActionsEnum } from "../../enum"
import { login, logout } from "./auth.action"

interface IInitState {
	isAuth: boolean
	error: unknown
	status: ActionsEnum
}

const initialState: IInitState = {
	isAuth: false,
	error: null,
	status: ActionsEnum.IDLE
}

const authReducer = createSlice({
	name: "auth",
	reducers: {
		setAuth: (state, { payload }) => {
			state.isAuth = payload
		},
		setStatus: (state, { payload }) => {
			//debugger
			state.status = payload
		}
	},
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = ActionsEnum.LOADING
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.status = ActionsEnum.SUCCESS
				state.isAuth = true
			})
			.addCase(login.rejected, (state, response: any) => {
				state.status = ActionsEnum.ERROR
				state.error = response.payload.message
				console.log(response.payload.message)
				// debugger
			})

			.addCase(logout.fulfilled, () => {
				console.log("FROM SKA")
				return initialState
			})
	}
})

export const { setAuth, setStatus } = authReducer.actions

export default authReducer.reducer
