import {useState,useEffect} from "react"
import Button from "@/components/Buttons/Button"
import styles from "./AddButton.module.css"

const useAddButtonState = () => {
	const [state,setState] = useState(false)

	const onPressButton = () => {
		return setState(!state)
	}
	return{state,onPressButton}
}

export default function AddButton({initial,pressed,svgInitial="initial",svgPressed="pressed"}){
	const {state,onPressButton} = useAddButtonState()
	const style = state ? styles.buttonActived : styles.button
	
	const svg = state ? svgInitial:svgPressed
		
	const text = state ? pressed  : initial

	return(
			<button
				style={{width:"100%"}}
				className={style}
				onClick={onPressButton}>
				<small style={{whiteSpace:"nowrap",fontSize:12}}>
					{text}
				</small>
				{svg}
			</button>

		)
}