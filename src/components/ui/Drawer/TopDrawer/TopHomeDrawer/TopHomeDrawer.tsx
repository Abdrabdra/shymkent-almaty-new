import { Button, Icon, Input, Stack } from "@mui/material"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"

import * as React from "react"
import Dialog from "@mui/material/Dialog"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import Filter from "./Filter"
import { useDispatch } from "react-redux"
import { setFilterReset } from "@store/reducers/filter/filter.slice"
import { useTypedSelector } from "@store/index"
import { MainButton } from "@components/ui/Button"

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})

const TopHomeDrawer = () => {
	const dispatch = useDispatch()
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleFilterReset = () => {
		dispatch(setFilterReset())
		setOpen(false)
	}

	const val = useTypedSelector((state) => state.filter.values)

	return (
		<>
			<Input placeholder="Поиск" disableUnderline sx={{ flex: 1 }} />
			<Button
				variant="contained"
				onClick={handleClickOpen}
				sx={{
					minWidth: "50px",
					width: "50px",
					height: "50px",
					borderRadius: "12px"
				}}
			>
				<Icon component={TuneOutlinedIcon} />
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Фильтры
						</Typography>
						<Stack>
							<MainButton onClick={handleFilterReset} bgcolor="transparent">
								Сбросить
							</MainButton>
						</Stack>
					</Toolbar>
				</AppBar>

				<Filter handleClose={handleClose} />
			</Dialog>
		</>
	)
}

export default TopHomeDrawer
