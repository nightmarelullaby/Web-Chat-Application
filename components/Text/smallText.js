import styles from "./smallText.module.css"

export default function Small({children,fontWeight,color,letterSpacing}){
    return(
        <small className={styles.small} style={{letterSpacing:letterSpacing ? letterSpacing : null,color: color ? color:"#2E2E3D",fontWeight:fontWeight ? fontWeight :500}}>{children}</small>
    )
}