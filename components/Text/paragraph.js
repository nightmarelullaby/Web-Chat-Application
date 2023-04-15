import styles from "./paragraph.module.css"

export default function Paragraph({children,fontWeight,color,textAlign,letterSpacing}){
    return(
        <p 
        className={styles.paragraph} 
        style={{
            letterSpacing:letterSpacing ? letterSpacing: null,
            textAlign: textAlign ? textAlign: null, 
            color: color ? color:"#707070",
            fontWeight:fontWeight ? fontWeight :500}}>{children}</p>
    )
}