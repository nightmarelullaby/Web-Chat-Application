import styles from "./MiniPopOver.module.css"
import {motion} from "framer-motion"
export default function MiniPopOver({children,text}){
	return(
		<>
			<div className={styles.element}>
				{children}
			<motion.div
					animate 
					className={styles.pop}
					style={{position:"absolute",
					bottom:"-80%",
					background:"black",zIndex:1000}}>

				<small 
					style={{color:"white",fontWeight:500,fontSize:11,letterSpacing:.6}}>
					Information
				</small>
			</motion.div>
			</div>
			

		</>)
}