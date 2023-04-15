import {motion} from "framer-motion"
import styles from "./PopOver.module.css"
import {useRef,useEffect} from "react"
import AddButton from "@/components/Buttons/AddButton"
import Image from "next/image"
import {PopOverState} from "./PopOver"

import { useRecoilState } from "recoil";
import {usePopOverState} from "@/components/PopOver/PopOver"

export default function PopOverContent({
	children,
	position="left",
	state}){
	const popOver = useRef()

	const className = position === "left" ? styles.popoverLeft : position === "right" ? styles.popoverRight : null

	return(
		<>
		<motion.div 
			ref={popOver}
			className={className}
			initial={{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			animate={state ? {x:0,opacity:1,pointerEvents:"all",display:"block"}:{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			transition={{duration:.15}}>
				{children}
			</motion.div>
		
				
		</>
		)}