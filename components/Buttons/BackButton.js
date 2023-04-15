import styles from "./BackButton.module.css"
import { useRouter } from 'next/router'

export default function BackButton({variant="primary",action}){
  const router = useRouter()
  return(
    <button 
      onClick={action ? ()=> action():null} 
      className={variant === "primary" ? styles.buttonPrimary: variant === "secondary" ? styles.buttonSecondary : null}>
      <svg 
        width="18" 
        height="18" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.3" 
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
        </svg>
      <small>back</small>
    </button>
  )
}
