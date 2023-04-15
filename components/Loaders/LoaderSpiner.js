import styles from "./Loader.module.css"

export default function LoaderSpinner({width,height,color}){
    return(
        <span 
        className={styles.loader} 
        style={{
            width:width ? width : 20, 
            height: height ? height: 20,
            borderTop: `3px solid ${color ? color : "red"}`}}></span>
    )
}