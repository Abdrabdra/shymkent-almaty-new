import { createSlice } from "@reduxjs/toolkit"
import { DriveIUnitEnum, StatementEnum, WheelEnum } from "types/enums"

interface IInitState {
	step: number
	stepTitle: string
	error: {
		status: number
		data: any
	} | null

	form: {
		selectedTransport?: string // вид объявления, машина, лодка, мото, запчасти
		selectedBrand?: number // марка - markaId
		selectedMark?: number // модель - modelId
		selectedManufacture?: number // годВыпуска - year
		selectedCase?: number // кузов - bodyTypeId
		selectedGeneration?: number // поколение - generationId
		selectedEngine?: string // двигатель (бензин, дизель) - transmissionId ?????????
		selectedGear?: DriveIUnitEnum // привод - driveUnit

		selectedMileage?: number // пробег - mileage
		selectedCustomsClearance?: boolean // Растоможка - customsClearance
		selectedCondition?: StatementEnum // состояние (новое, б/у) - state

		selectedPrice?: number // цена - price
		selectedPicture: File[] //
		selectedTags: number[] //
		selectedCity?: number // город - cityId

		selectedContactName?: string //
		selectedContactNumber?: string //
		steeringWheel?: WheelEnum // левоРуль(право) - steeringWheel
	}
}

const initialState: IInitState = {
	step: 0,
	stepTitle: "",
	error: null,

	form: {
		selectedTransport: undefined,
		selectedBrand: undefined,
		selectedMark: undefined,
		selectedManufacture: undefined,
		selectedCase: undefined,
		selectedGeneration: undefined,
		selectedEngine: undefined,
		selectedGear: undefined,
		selectedCondition: StatementEnum.BOO,
		selectedPrice: undefined,
		selectedPicture: [],
		selectedTags: [],
		selectedCity: undefined,

		selectedContactName: undefined,
		selectedContactNumber: undefined,
		steeringWheel: undefined,
		selectedMileage: undefined,
		selectedCustomsClearance: undefined
	}
}

const stepperReducer = createSlice({
	name: "stepper",
	initialState,
	reducers: {
		setStep: (state, { payload }) => {
			state.step = payload
		},
		setStepTitle: (state, { payload }) => {
			state.stepTitle = payload
		},
		resetStep: (state) => {
			state.step = 0
		},
		incrementStep: (state) => {
			state.step += 1
		},
		decrementStep: (state) => {
			state.step -= 1
		},
		resetStepper: () => initialState,

		setDefaultState: (state) => {
			state.form.selectedTransport = undefined
			state.form.selectedBrand = undefined
			state.form.selectedMark = undefined
			state.form.selectedManufacture = undefined
			state.form.selectedCase = undefined
			state.form.selectedGeneration = undefined
			state.form.selectedEngine = undefined
			state.form.selectedGear = undefined
			state.form.selectedCondition = StatementEnum.BOO
			state.form.selectedPrice = undefined
			state.form.selectedPicture = []
			state.form.selectedTags = []
			state.form.selectedCity = undefined

			state.form.selectedContactName = undefined
			state.form.selectedContactNumber = undefined
			state.form.steeringWheel = undefined
			state.form.selectedMileage = undefined
			state.form.selectedCustomsClearance = undefined
			state.error = null
		},
		setStepperError: (state, { payload }) => {
			state.error = payload
		},

		setFormSelectedTransport: (state, { payload }) => {
			state.form.selectedTransport = payload
		},
		setFormSelectedBrand: (state, { payload }) => {
			state.form.selectedBrand = payload
		},
		setFormSelectedMark: (state, { payload }) => {
			state.form.selectedMark = payload
		},
		setFormSelectedManufacture: (state, { payload }) => {
			state.form.selectedManufacture = payload
		},
		setFormSelectedCase: (state, { payload }) => {
			state.form.selectedCase = payload
		},
		setFormSelectedGeneration: (state, { payload }) => {
			state.form.selectedGeneration = payload
		},
		setFormSelectedEngine: (state, { payload }) => {
			state.form.selectedEngine = payload
		},
		setFormSelectedGear: (state, { payload }) => {
			state.form.selectedGear = payload
		},
		setFormSelectedCondition: (state, { payload }) => {
			state.form.selectedCondition = payload
		},
		setFormSelectedPrice: (state, { payload }) => {
			state.form.selectedPrice = payload
		},
		setFormSelectedPicture: (state, { payload }) => {
			state.form.selectedPicture = payload
		},

		// forTag
		setFormSelectedTags: (state, { payload }) => {
			state.form.selectedTags.push(payload)
		},
		deleteFromFormTag: (state, { payload }) => {
			state.form.selectedTags = state.form.selectedTags.filter(
				(row) => row !== payload
			)
		},

		setFormSelectedCity: (state, { payload }) => {
			state.form.selectedCity = payload
		},

		setFormSelectedContactName: (state, { payload }) => {
			state.form.selectedContactName = payload
		},
		setFormSelectedContactNumber: (state, { payload }) => {
			state.form.selectedContactNumber = payload
		},
		setFormSteeringWheel: (state, { payload }) => {
			state.form.steeringWheel = payload
		},
		setFormSelectedMileage: (state, { payload }) => {
			state.form.selectedMileage = payload
		},
		setFormSelectedCustomsClearance: (state, { payload }) => {
			state.form.selectedCustomsClearance = payload
		}
	}
})

export const {
	setStep,
	resetStep,
	incrementStep,
	decrementStep,
	setStepTitle,
	setStepperError,
	resetStepper,

	setDefaultState,
	setFormSelectedTransport,
	setFormSelectedBrand,
	setFormSelectedMark,
	setFormSelectedManufacture,
	setFormSelectedCase,
	setFormSelectedGeneration,
	setFormSelectedEngine,
	setFormSelectedGear,
	setFormSelectedCondition,
	setFormSelectedPrice,
	setFormSelectedPicture,

	setFormSelectedTags,
	deleteFromFormTag,

	setFormSelectedCity,

	setFormSelectedContactName,
	setFormSelectedContactNumber,
	setFormSteeringWheel,
	setFormSelectedMileage,
	setFormSelectedCustomsClearance
} = stepperReducer.actions

export default stepperReducer.reducer
