import styles from "./Searchbar.module.css";
import {useState,useRef} from "react";
import CloseButton from "@/components/Buttons/CloseButton"

export default function Searchbar({action,placeholder="Search for something"}){
	const formRef = useRef()

	// const handleResetValue = (e) => {
	// 	e.preventDefault()
	// 	// return formRef.current[0].value = ""
	// }

	return(
		<form 
			ref={formRef}
			onSubmit={action ? (e)=> action(e): null}
			className={styles.form}>
			<label
				className={styles.label} >
			<svg 
				className={styles.searchsvg}
				width="16"
				height="16"
				xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
	  				<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			</svg>
			</label>
			<input 
				id="searchbar"
				placeholder={placeholder}
				className={styles.main}
				type="text"/>
		
			<label/>
			{/*<label 
			style={{left:"90%",zIndex:10000}}
			className={styles.label}> 
				<CloseButton width={18} height={18} action={handleResetValue}/>
			</label>*/}
		</form>)
}