import styles from "./Button.module.css"
import Small from "@/components/Text/smallText"
import LoaderSpinner from "@/components/Loaders/LoaderSpiner"
import { buttonState } from "@/atoms/ButtonState"
import {useRecoilValue } from "recoil"
import {RecoilRoot} from "recoil"

const Button = ({customStyle,action,children,svg}) => {
    const state = useRecoilValue(buttonState)
    
    return(
        <>
        
            {
            state === "actived" ?  
            <RecoilRoot>           
            <button 
            onClick={action ? action: null} 
            className={styles.button} 
            style={customStyle ? customStyle: null}>
                {svg ? svg : null}
                    {children}
            </button>
            </RecoilRoot> : 


            state === "loading" ? 
            <button 
            onClick={action ? action: null} 
            className={styles.buttonDisabled} 
            style={customStyle ? customStyle: null}>
                {svg ? svg : null}
                {children}
                   <LoaderSpinner color={"#5057EE"} width={10} height={10}/>
                
            </button> 
       : null}
        
        
        </>
    )
}

export default Button