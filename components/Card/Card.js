import styles from "./Card.module.css"

export default function Card ({children}){
  return (
    <div className={styles.main} style={{padding:16,overflow:"hidden",}}>
      {children}      
      <div className={styles.circle}></div>
      <div className={styles.circlebg}></div>
    </div>
    )
}