import {useRef} from "react"
import {motion} from "framer-motion"
import styles from "./UserDropdown.module.css"

export default function PopOver({children}){
	     const popOver = useRef()
    return(
        <motion.div 
                ref={popOver}
                    className={styles.dropdown}
                    transition={{ zIndex:100,duration:.24,ease: [.4,0,.2,1] }}
                    initial={{opacity:0,pointerEvents:"none"}}
                    animate={open ? 
                    {opacity:1,pointerEvents:"all",} : 
                    {opacity:0,pointerEvents:"none",display:"none"}}
                    style={{
                        position:"absolute",
                        zIndex:210000,
                        background:"white",
                        borderRadius:6,
                        overflow:"hidden",
                        height:"fit-content",
                        width:"fit-content"}}>

                       
                    <ul 
                        style={{listStyleType:"none"}}>
                        {!Array.isArray(children) && children.length <= 1 ? null : children}
                        {console.log(typeof(children))}
                    </ul>

                
            </motion.div>
        )
}