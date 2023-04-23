import AbsoluteBox from "@components/modules/AbsoluteBox"
import { MainButton } from "@components/ui/Button"
import { Stack } from "@mui/material"
import { FC } from "react"

interface Props {
	phone: {
		id: number
		phone: string
	}
}

const ButtonsBox: FC<Props> = ({ phone }) => {
	const handleClick = () => {
		alert(`Номер Телефона: ${phone.phone}`)
	}

	return (
		<AbsoluteBox>
			<Stack
				direction="row"
				justifyContent={"space-between"}
				spacing={2.5}
				sx={{ flex: 1, marginBottom: "12px" }}
			>
				<MainButton
					sx={{
						flex: "1",
						height: "50px",
						color: "common.white",
						backgroundColor: "secondary.300",
						borderRadius: "10px"
					}}
				>
					Написать
				</MainButton>
				<a
					href={`tel:${phone.phone}}`}
					style={{ flex: "1", textDecoration: "none" }}
				>
					<MainButton
						onClick={handleClick}
						sx={{
							height: "50px",
							color: "common.white",
							backgroundColor: "primary.main",
							borderRadius: "10px"
						}}
					>
						Позвонить
					</MainButton>
				</a>
			</Stack>
		</AbsoluteBox>
	)
}

export default ButtonsBox
