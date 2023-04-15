import styles from "./h3.module.css"

export default function H3({
    children,
    fontWeight,
    color}){
    return(
        <h3 className={styles.h3} style={{color: color ? color:"#2E2E3D",fontWeight:fontWeight ? fontWeight :500}}>{children}</h3>
    )
}