import styles from "./h2.module.css"
 
export default function H2({children,fontWeight,color}){
    return(
        <h2 className={styles.h2}style={{color: color ? color:"#2E2E3D",fontWeight:fontWeight ? fontWeight :500}}>{children}</h2>
    )
}