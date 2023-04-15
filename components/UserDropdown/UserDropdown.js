import styles from "./UserDropdown.module.css"
import {motion} from "framer-motion"
import {useState,useEffect,useRef} from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

export const PopOverDynamic = dynamic(()=> import("@/components/UserDropdown/PopOver"),{
    loading:()=>null,
    ssr:false
})


export default function UserDropdown({
        children,
        title ="Milenka Djkovic", 
        img = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        subTitle="not registered yet.",
        svg=null,
        width="100%"}){

    const [open,setOpen] = useState(false)
    //state that handles if open or not

    return(<div 
        style={{width:width}} 
    className={styles.mainContainer}>
            <button 
            onClick={()=> setOpen(!open)}
            className={styles.main}
            style={{
                display:"flex",
                alignItems:"center",
                borderRadius:6,
                position:"relative",
                zIndex:100000}}>
            {svg ? svg : <div style={{
                    position:"relative",
                    width:"32px",
                    height:"32px",
                    borderRadius:100,
                    overflow:"hidden"}}>
                    <Image
                    style={{objectFit:"cover"}}
                        fill
                        quality={100}
                        src={img}/>
                </div>}
            
                        <div 
                        className={styles.boxText}>
                        <small 
                            className={styles.mainTitle}
                            style={{fontWeight:600,letterSpacing:.3}}>
                           {title}
                        </small>

                        <small 
                            className={styles.secondaryTitle}
                            >
                            {subTitle}
                        </small>

                            
                        </div>
                   {/*      <svg 
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>*/}
                        {open ? 
                            <svg               
                                width="16"
                                height="16" 
                                stroke="black" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        :
                        <svg 
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="black" 
                            class="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>}

                    
        </button>


                
            </div>

        )
}    